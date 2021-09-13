const popup = (contentPopup, btnPopup, closeBtn, overlay) => {
  const popupBtns = document.querySelectorAll(btnPopup),
    btnClose = document.querySelector(closeBtn),
    popupOverlay = document.querySelector(overlay),
    popupContent = document.querySelector(contentPopup);

  popupBtns.forEach((el) => {
    el.addEventListener('click', () => {
      popupContent.style.display = 'block';
      popupOverlay.style.display = 'block';
    });

  });

  popupOverlay.addEventListener('click', () => {
    popupContent.style.display = 'none';
    popupOverlay.style.display = 'none';

  });

  btnClose.addEventListener('click', () => {
    popupContent.style.display = 'none';
    popupOverlay.style.display = 'none';
  });

};

export default popup;