import "./modules/function";
import "./modules/slick";
import "./modules/gallery";
import './modules/materialize';
// import './modules/scrollAnimation';

// import './modules/validate';
import './modules/table';
import $ from "jquery";
import 'slick-carousel';



window.addEventListener('DOMContentLoaded', () => {
  // Main menu
  const menu = document.querySelector('.header__menu');
  const logo = document.querySelector('.header__logo');
  const overlay = document.querySelector('.header__overlay');
  const burger = document.querySelector('.header__burger');
  const search = document.querySelector('.header__search');
  console.log(logo.clientWidth + menu.clientWidth + search.clientWidth + 60);
  if(logo.clientWidth + menu.clientWidth + search.clientWidth + 60 > window.innerWidth ) {
    const header = document.querySelector('.header');
    header.classList.add('small');
  }
  burger.addEventListener('click', e => {
    menu.classList.add('active');
    overlay.classList.add('active');
  })
  overlay.addEventListener('click', e => {
    menu.classList.remove('active');
    overlay.classList.remove('active');
  })

  //swipe event
  let touchstartX = 0;
  let touchendX = 0;

  let swipedZone = document.querySelector('.header__menu');

  swipedZone.addEventListener('touchstart', function(event) {
    touchstartX = event.changedTouches[0].screenX;
  }, false);
  swipedZone.addEventListener('touchend', function(event) {
    touchendX = event.changedTouches[0].screenX;
    handleGesure();
  }, false);

  function handleGesure() {
    if (touchendX > touchstartX) {
      menu.classList.remove('active');
      overlay.classList.remove('active');
    }
  }
  //END Main menu


  // Sub menu
  const sectionMenuLinks = document.querySelectorAll('.section__menu > li > a');
  const menuOpeners = document.querySelectorAll('.menu-opener');
  menuOpeners.forEach(link => {
    link.addEventListener('click', e => {
      e.stopPropagation();
      e.preventDefault();
      link.classList.toggle('active');
      menuOpeners.forEach(link2 => {
        if(link !== link2) {
          link2.classList.remove('active');
        }
      })
    })
  })
  document.addEventListener('click', e => {
    menuOpeners.forEach(link => {
      link.classList.remove('active');
    })
  })
  // EndSub menu

  // collapse
  if($('.course-block-slider').length > 1) {
    let lastSlider = $('.course-block-slider')[$('.course-block-slider').length - 1];
    lastSlider = $(lastSlider);
    lastSlider.on('init', (event, slick) => {
      const collapseBodies = document.querySelectorAll('.tabs-section__content');
      collapseBodies.forEach(body => {
        let bodyHeight;
        if (body.style.display === 'none') {
          body.style.display = '';
          bodyHeight = body.clientHeight;
          body.style.display = 'none';
        } else  {
          bodyHeight = body.clientHeight;
        }
        if (bodyHeight > 330) {
          body.classList.add('extended');
          body.classList.toggle('collapse');
          if(body.classList.contains('collapse')) {
            body.style.height = 330 + 'px';
          } else  {
            body.style.height = bodyHeight + 60 + 'px';
          }
        }
        // listener on btns
        const btn = body.querySelector('.tabs-section__btn');
        btn.addEventListener('click', evt => {
          body.classList.toggle('collapse');
          if(body.classList.contains('collapse')) {
            body.style.height = 330 + 'px';
          } else  {
            body.style.height = bodyHeight + 60 + 'px';
          }
        })
        // listener on btns
      })
      // END collapse
    })
  }
  //

})








