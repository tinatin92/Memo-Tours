document.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (document.documentElement.scrollTop > 1 || window.pageYOffset > 1) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});



const heroSwiper = new Swiper('.hero-slider', {
    
    speed: 1000,
    loop: true,
    effect: 'fade',
   
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

const tourSwiper = new Swiper('.tour-slider', {
/*     slidesPerView: 3, */
    spaceBetween: 20,
    pauseOnMouseEnter: 'true',
    speed: 1000,
    loop: true,
   /*  autoplay: {
        delay: 2500,
        disableOnInteraction: true,
    }, */
    pagination: {
        el: ".swiper-pagination-tours",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
});

Fancybox.bind('[data-fancybox="gallery"]', {
    // Your custom options for a specific gallery
  });

  const burgerIcon = document.querySelector('.burger-icon')
  const burgerMenu = document.querySelector('.burger-menu')
  const header = document.querySelector('.header');
  burgerIcon.addEventListener('click', () =>{
    burgerMenu.classList.toggle('open')
    header.classList.toggle('white')
  })