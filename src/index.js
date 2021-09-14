import popup from './modules/popup';
import scroll from './modules/smoothScroll';

//Модальное окно в шапке
popup('.header-modal--opened',
  '.header-modal',
  'a.btn-warning',
  '.header-modal__close',
  '.overlay',
  );

  //Модальное окно в секции
popup('.services-modal--opened',
  '.services-modal',
  'a.btn-success',
  '.services-modal__close',
  '.overlay',
  );

//Скроллинг
scroll();