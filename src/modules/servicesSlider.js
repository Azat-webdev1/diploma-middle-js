const servicesSlider = () => {
    let position = 0,
        maxSlides;

    const services = document.getElementById('services'),
        container = services.querySelector('.container'),
        servicesWrap = services.querySelector('.row'),
        servicesSlides = services.querySelectorAll('.col-md-12'),
        servicesArrows = services.querySelector('.services-arrows'),
        screenWidth = window.screen.width;

    container.style.cssText = 'overflow: hidden;';
    servicesWrap.style.cssText = 'display: flex; transition: transform 0.5s; will-change: transform';
    servicesWrap.insertAdjacentElement('afterend', servicesArrows);

    if (screenWidth > 576) {
        maxSlides = 2;
        servicesSlides.forEach(item => {
            item.style.cssText = `display: flex; flex: 0 0 ${Math.floor(100 / maxSlides)}%`;
        });
    } else {
        maxSlides = 1;
        servicesSlides.forEach(item => {
            item.style.cssText = `display: block; flex: 0 0 ${Math.floor(100 / maxSlides)}%`;
        });
    }

    const prevSlide = () => {
        --position;
        if (position < 0) {
            position = servicesSlides.length - maxSlides;
        }
        servicesWrap.style.transform = `translateX(-${position * Math.floor(100 / maxSlides)}%)`;
    };

    const nextSlide = () => {
        ++position;
        if (position > servicesSlides.length - maxSlides) {
            position = 0;
        }
        servicesWrap.style.transform = `translateX(-${position * Math.floor(100 / maxSlides)}%)`;
    };

    services.addEventListener('click', event => {
        if (event.target.closest('.services__arrow')) {
            if (event.target.closest('.services__arrow--left')) {
                prevSlide();
            }
            if (event.target.closest('.services__arrow--right')) {
                nextSlide();
            }
        }
    });
    window.addEventListener('resize', servicesSlider);
};

export default servicesSlider;
