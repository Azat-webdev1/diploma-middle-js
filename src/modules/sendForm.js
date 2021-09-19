const sendForm = () => {
  const errorMessage = 'Что-то пошло не так...',
    loadMessage = 'Загрузка...',
    successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

  const postData = body => fetch('./server.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body),
    credentials: 'include'
  });

  const clearInput = (idForm) => {
    const formId = document.querySelector(idForm);
    [...formId.elements]
    .filter(item =>
        item.tagName.toLowerCase() !== 'button' &&
        item.type !== 'button')
      .forEach(item =>
        item.value = '');
  };

  const removeStatusMessage = () => {
    const status = document.querySelector('.status-message');
    if (!status) return;
    setTimeout(() => {
      status.remove();
    }, 3000);
  };

  const processingForm = (idForm) => {
    const formId = document.querySelector(idForm),
      statusMessage = document.createElement('div'),
      formBtns = document.querySelectorAll('.btn-block'),
      inputs = document.querySelectorAll('input'),
      totalCalc = document.querySelector('#calc-total');

    statusMessage.classList.add('status-message');
    statusMessage.style.cssText = 'font-size: 2rem; color: #fff;';
    
    const btnSetAttribute = () => {
      formBtns.forEach((el) => {
        el.setAttribute('disabled', true);
      });
    };

    const btnRemoveAttribute = () => {
      formBtns.forEach((el) => {
        el.removeAttribute('disabled');
      });
    };

    const isValid = (e) => {
      const target = e.target;
      const phoneReg = /^[\+ 0-9]/;
      const nameReg = /^[а-яё a-z]{2,}$/i;
      target.value.trim();
      if (target.name === 'fio') {
        if (!nameReg.test(target.value)) {
          target.classList.remove('success');
          target.classList.add('error');
          target.value.trim();
          target.setCustomValidity('не верное имя');
        }
        else {
          target.classList.remove('error');
          target.classList.add('success');
          target.setCustomValidity('');
        }
      }
      if (target.name === 'phone') {
        if (!phoneReg.test(target.value)) {
          target.classList.remove('success');
          target.classList.add('error');
          target.value.trim();
          target.setCustomValidity('не верный телефон');
        }
        else {
          target.classList.remove('error');
          target.classList.add('success');
          target.setCustomValidity('');
        }
      }
    };

    for (let el of inputs) {
      if (el.tagName !== 'BUTTON' && el.type!== 'hidden') {
        el.setAttribute('required', '');
        
        el.addEventListener('change', (e) => {
          isValid(e);
        });

        el.addEventListener('blur', (e) => {
          let target = e.target;
          if (target.closest('input[placeholder="Ваше имя*"]') ||
            target.closest('input[placeholder="ваше имя"]') &&
            target === undefined) {
            let text = target.value;
            text = text[0].toUpperCase() + text.substring(1);
            target.value = text;
          }
          if (target.closest('.error')) {
            btnSetAttribute();
          } else {
            btnRemoveAttribute();
          }
          target.classList.remove('success');
          
        });
      }
    }
    
    formId.addEventListener('submit', e => {
      e.preventDefault();
      statusMessage.textContent = loadMessage;
      formId.appendChild(statusMessage);

      let formData = new FormData(formId);
      if (totalCalc) {
        if (+totalCalc.value) {
          formData.append('totalCalc', +totalCalc.value)
        }
      }

      postData(Object.fromEntries(formData))
        .then((response) => {
          if (response.status !== 200) {
            throw new Error('status network not 200');
          }
          statusMessage.style.cssText = `
            font-size: 2rem;
            color: green;
          `;
          statusMessage.textContent = successMessage;
          removeStatusMessage();
          clearInput(idForm);
        })
        .catch((error) => {
          statusMessage.style.cssText = `
            font-size: 2rem;
            color: red;
          `;
          removeStatusMessage();
          statusMessage.textContent = errorMessage;
          console.error(error);
        });
    });
  };

  processingForm('form[name="action-form"]');
  processingForm('form[name="action-form2"]');

};

export default sendForm;
