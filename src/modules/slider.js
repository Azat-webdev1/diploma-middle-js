const slider = () => {
    let position = 0;
    let maxPosition;
    const mainSliderSection = document.getElementById('benefits'),
        benefitsWrap = document.querySelector('.benefits-wrap'),
        benefitsInner = document.querySelector('.benefits-inner'),
        slides = document.querySelectorAll('.benefits__item'),
        screenWidth = window.screen.width;
    if (screenWidth > 576) {
        maxPosition = 3;
    } else {
        maxPosition = 1;
    }

    benefitsInner.style.overflow = 'hidden';
    benefitsInner.style.maxWidth = '576px';
    benefitsInner.style.margin = '0 auto';
    benefitsWrap.style.transition = 'transform 0.5s';
    benefitsWrap.style.willChange = 'transform';

    slides.forEach(item => {
        item.style.display = 'flex';
        item.style.flexDirection = 'column';
        item.style.flex = `0 0 ${Math.floor(100 / maxPosition)}%`;
        item.style.maxWidth = 'unset';
    });

    const prevSlide = () => {
        --position;
        if (position < 0) {
            position = slides.length - maxPosition;
        }
        benefitsWrap.style.transform = `translateX(-${position * Math.floor(100 / maxPosition)}%)`;
    };

    const nextSlide = () => {
        ++position;
        if (position > slides.length - maxPosition) {
            position = 0;
        }
        benefitsWrap.style.transform = `translateX(-${position * Math.floor(100 / maxPosition)}%)`;
    };

    mainSliderSection.addEventListener('click', event => {
        if (event.target.closest('.benefits__arrow')) {
            if (event.target.closest('.benefits__arrow--left')) {
                prevSlide();
            } else if (event.target.closest('.benefits__arrow--right')) {
                nextSlide();
            }
        }
    });

    window.addEventListener('resize', slider);
};

export default slider;
