import './index.html';
import './index.css';
import './index_list.html';
import 'swiper/css';
import Swiper, { Navigation, Pagination } from 'swiper';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';

  const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: 'true',
      },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }, 
    slidesPerView:1.4,
    // spaceBetween:32,
    breakpoints: {
        320: {
          spaceBetween: 20,
          slidesPerView:1.2,
        },
        640: {
          spaceBetween: 24,
          slidesPerView:1.3,
        },
        768: {
          spaceBetween: 32,
          slidesPerView:1.4,
        }
      },
    initialSlide:1,
    centeredSlides:true,
    //   scrollbar: {
    //     el: '.swiper-scrollbar',
    //   },
  });

