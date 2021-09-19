import popup from './modules/popup';
import scroll from './modules/smoothScroll';
import countTimer from './modules/countTimer';
import modulSertificate from './modules/modulSertificate';
import sendForm from './modules/sendForm';
import slider from './modules/slider';
import servicesSlider from './modules/servicesSlider';

//Модальное окно в шапке
popup(
  '.header-modal',
  'a.btn-warning',
  '.header-modal__close',
  '.overlay',
  );

  //Модальное окно в секции
popup(
  '.services-modal',
  'a.btn-success',
  '.services-modal__close',
  '.overlay',
  );

//Скроллинг
scroll();

//Счетчик обратного отсчета
countTimer(
  '20 Sep 2021',
  '#order_1',
  '.count_1 span',
  '.count_2 span',
  '.count_3 span',
  '.count_4 span'
);

countTimer(
  '20 Sep 2021',
  '#order_2',
  '.count_1 span',
  '.count_2 span',
  '.count_3 span',
  '.count_4 span'
);
//Слайдер карусель
slider();
servicesSlider();

//Модальное окно cертификаты и документы
modulSertificate();

//Отправка формы
sendForm();
