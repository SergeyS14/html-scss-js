import '@styles/main.scss';

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const swiper = new Swiper('.swiper', {
    // Optional parameters
    modules: [Navigation, Pagination],

    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    
  });
  
const counters = document.querySelectorAll('[data-counter]');

if (counters) {
  counters.forEach(counter => {
    counter.addEventListener('click', e =>{
      const target = e.target;

      if(target.closest('.count__btn')){
        let value = parseInt(target.closest('.counter').querySelector('input').value);

        if (target.classList.contains('count__btn_plus')){
          value++;
        } else{
          --value;
        }
        if (value <=0){
          value=0;
        }

        target.closest('.counter').querySelector('input').value = value;
      }
    })
  })
}