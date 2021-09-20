const modulSertificate = () => {
  const scroll = document.querySelector('.smooth-scroll'),
    sertificateDocument = document.querySelectorAll('a.sertificate-document');

  scroll.insertAdjacentHTML('beforebegin', `
  <!-- Модальное окно -->
  <div class="modal" id="modal-sertificate">
    <div class="modal__content">
      <div class="modal__close-button"><img src="./images/close.svg" width="20" alt=""></div>
    </div>
  </div>
  `)

  let style = document.getElementById('style-modul');
  style = document.createElement('style');
  style.id = 'style-modul';

  style.textContent = `
  .modal {
    position: absolute;
    visibility: hidden;
    opacity: 0;
    top: 50%;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    overflow-y: scroll;
    
  }
  
  .modal_active {
    position: fixed;
    visibility: visible;
    opacity: 1;
    transition: .1s;
    top: 0;
  }
  
  .modal__content {
    width: 620px;
    height: 850px;
    background:#f9f9f9;
    background:url("../images/documents/original/document4.jpg") center;
    background-repeat:no-repeat;
    background-size: contain;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9998;
  }
  
  .modal__close-button {
    height: 35px;
    width: 35px;
    display: flex;
    position: fixed;
    right: -4px;
    top: -1px;
    cursor: pointer;
    outline: none;
    opacity: 0.6;
  }
  .modal__close-button:hover {
    transition: .3s;
    opacity: 1;
  }

  `;
  document.head.appendChild(style);

  const modalClose = document.querySelector('.modal__close-button'),
    modal = document.querySelector('.modal'),
    modalSertificate = document.querySelector('#modal-sertificate');
  
  sertificateDocument.forEach((el) => {
    el.removeAttribute('href');
    el.addEventListener('click', (e) => {
      e.preventDefault();
      modalSertificate.classList.add('modal_active');
    });
  });

  modalClose.addEventListener('click', (e) => {
    e.preventDefault();
    modalSertificate.classList.remove('modal_active');
  });

  modal.addEventListener('click', (e) => {
    if (!e.target.closest('.modal__content')) {
      modalSertificate.classList.remove('modal_active');
    }
    
  });
  
};

export default modulSertificate;