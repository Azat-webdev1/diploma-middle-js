const scroll = () => {
  const smoothScroll = document.querySelector('.smooth-scroll');
  const rootElement = document.documentElement;
  
  smoothScroll.style.display = 'none';
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 700) {
      smoothScroll.style.display = 'block';
    } else {
      smoothScroll.style.display = 'none';
    }
  });
  
  smoothScroll.addEventListener('click', () => {
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  });
};

export default scroll;
