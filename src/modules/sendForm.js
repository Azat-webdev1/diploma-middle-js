const sendForm = () => {
  const errorMessage = 'Что-то пошло не так...',
    loadMessage = 'Загрузка...',
    successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

  const isValid = (e) => {
    const target = e.target ? e.target : e;
    const phoneReg = /^[\+ 0-9]{3,16}$/;
    const nameReg = /^[а-яё a-z]{2,}$/i;
    
    if (target.name === 'fio') {
      if (!nameReg.test(target.value)) {
        target.classList.remove('success');
        target.classList.add('error');
        target.value.trim();
        return false;
      }
    } else {
      target.classList.remove('error');
      target.classList.add('success');
    }
    if (target.name === 'phone') {
      if (!phoneReg.test(target.value)) {
        target.classList.remove('success');
        target.classList.add('error');
        target.value.trim();
        return false;
      }
    } else {
      target.classList.remove('error');
      target.classList.add('success');

    }

    return true;
  };


  const postData = body => fetch('./server.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body),
    credentials: 'include'
  });

  const clearInput = (idForm) => {
    const formId = idForm;
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
    const formId = idForm, //document.querySelector(idForm),
      statusMessage = document.createElement('div'),
      formBtns = formId.querySelectorAll('button'),
      inputs = formId.querySelectorAll('input.form-control'),
      totalCalc = document.querySelector('#calc-total');
    
    statusMessage.classList.add('status-message');
    statusMessage.style.cssText = 'font-size: 2rem; color: #fff;';

    const addMess = document.createElement('div');
    addMess.classList.add('mess');
    addMess.style.cssText = 'color: red;';
    addMess.textContent = 'не верно';
    

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


    for (let el of inputs) {
      if (el.tagName !== 'BUTTON' && el.type !== 'hidden') {
        el.setAttribute('required', '');

        el.addEventListener('input', (e) => {
          isValid(e);
          
        });

        el.addEventListener('input', (e) => {
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
      let validTrue = true;
      inputs.forEach((item) => {
        if (!isValid(item)) {
          validTrue = false;
          statusMessage.style.cssText = `
            font-size: 2rem;
            color: red;
          `;
          statusMessage.textContent = 'Ошибки в форме';
          return false;
        }
      })
      if (!validTrue) return false;
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
          setTimeout(() => {
            addMess.classList.remove('mess');
          }, 1000);
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

  /*
  processingForm('#callback form');
  processingForm('form[name="application-form"]');
  processingForm('form[name="action-form"]');
  processingForm('form[name="action-form2"]');
  */
  document.querySelectorAll('form').forEach(item => processingForm(item));

};

export default sendForm;