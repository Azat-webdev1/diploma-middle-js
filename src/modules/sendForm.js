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
    const formId = document.querySelector(idForm);
    const statusMessage = document.createElement('div');
    const inputs = document.querySelectorAll('input');
    const formBtns = document.querySelectorAll('.btn-block');
    
    statusMessage.classList.add('status-message');
    statusMessage.style.cssText = 'font-size: 2rem; color: #fff';


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

    const inputError = () => {
      inputs.forEach((el) => {
        el.classList.add('error');
      });
    };

    const delInputError = () => {
      inputs.forEach((el) => {
        el.classList.remove('error');
      });
    };

    const isValid = e => {
      const target = e.target;
      const phoneReg = /^[\+ 0-9]{11,16}$/;
      const nameReg = /^[а-яё a-z]{2,}$/i;
      if (target.name === 'phone') {
        if (!phoneReg.test(target.value)) {
          inputError();
        }
      }
      if (target.name === 'fio') {
        if (!nameReg.test(target.value)) {
          inputError();
        }
      }
    };

    inputs.forEach((el) => {
      el.setAttribute('required', '');
      el.addEventListener('focus', (e) => {
        let target = e.target;
        if (target.closest('.error')) {
          target.classList.remove('error');
        }
      });

      el.addEventListener('blur', (e) => {
        let target = e.target;
        if (target.closest('input[placeholder="Ваше имя*"]') ||
          target.closest('input[placeholder="ваше имя"]')) {
          let text = target.value;
          text = text[0].toUpperCase() + text.substring(1);
          target.value = text;
        }
        if (target.closest('.error')) {
          btnSetAttribute();
        } else {
          btnRemoveAttribute();
          if (!target === 'disabled') {
            target.classList.remove('error');
          }
        }
        isValid(e);
      });

    });

    formId.addEventListener('submit', e => {
      e.preventDefault();
      statusMessage.textContent = loadMessage;
      formId.appendChild(statusMessage);

      postData(Object.fromEntries(new FormData(formId)))
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
        delInputError();
    });
  };

  processingForm('form[name="action-form"]');
  processingForm('form[name="action-form2"]');

};

export default sendForm;