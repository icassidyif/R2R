import "./modules/function";
import "./modules/slick";
import "./modules/gallery";
import './modules/materialize';
import './modules/smoothScroll';

// import './modules/scrollAnimation';


import './modules/table';
import './modules/form';
//import './modules/scrollBar';
import $ from "jquery";
import 'slick-carousel';
import './modules/validate';

import './modules/datepicker';




window.addEventListener('DOMContentLoaded', () => {
  // Main menu
  const body = document.querySelector('body');
  const menu = document.querySelector('.header__menu');
  const logo = document.querySelector('.header__logo');
  const overlay = document.querySelector('.overlay');
  const burger = document.querySelector('.header__burger');
  const search = document.querySelector('.header__search');
  //console.log(logo.clientWidth + menu.clientWidth + search.clientWidth + 60);
  if(logo.clientWidth + menu.clientWidth + search.clientWidth + 60 > window.innerWidth ) {
    const header = document.querySelector('.header');
    header.classList.add('small');
  }
  burger.addEventListener('click', e => {
    menu.classList.add('active');
    overlay.classList.add('active');
    body.classList.add('lock');
  })
  overlay.addEventListener('click', e => {
    menu.classList.remove('active');
    overlay.classList.remove('active');
    (document.querySelector('.sidebar'))? sidebar.classList.remove('active') : '';
    body.classList.remove('lock');
  })

  // sidebar show
  const sidebar = document.querySelector('.sidebar');
  if(document.querySelector('.sidebar')) {
    const sidebarBtn = document.querySelector('.sidebar-show-btn');
    const sidebarClose = document.querySelector('.sidebar__close');

    sidebarBtn.addEventListener('click', e => {
      e.preventDefault();
      sidebar.classList.toggle('active');
      overlay.classList.toggle('active');
      body.classList.add('lock');
    })

    sidebarClose.addEventListener('click', e => {
      e.preventDefault();
      sidebar.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('lock');
    })

  }

  //swipe event
  let touchstartX = 0;
  let touchendX = 0;

  let swipedZoneMenu = document.querySelector('.header__menu');

  swipedZoneMenu.addEventListener('touchstart', function(event) {
    touchstartX = event.changedTouches[0].screenX;
  }, false);
  swipedZoneMenu.addEventListener('touchend', function(event) {
    touchendX = event.changedTouches[0].screenX;
    handleMenu();
  }, false);

  if(document.querySelector('.sidebar')) {
    let swipedZoneSidebar = document.querySelector('.sidebar');

    swipedZoneSidebar.addEventListener('touchstart', function(event) {
      touchstartX = event.changedTouches[0].screenX;
    }, false);
    swipedZoneSidebar.addEventListener('touchend', function(event) {
      touchendX = event.changedTouches[0].screenX;
      handleSidebar();
    }, false);

  }


  function handleMenu() {
    if (touchendX > touchstartX + 20) {
      menu.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('lock');
    }
  }

  function handleSidebar() {
    if (touchendX < touchstartX - 20) {
      sidebar.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('lock');
    }
  }
  //END Main menu


  // Sub menu
  //const sectionMenuLinks = document.querySelectorAll('.section__menu > li > a');
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

  if($('.tab-slider').length) {
    let lastSlider;
    if($('.tab-slider').length > 1) {
      lastSlider = $('.tab-slider')[$('.tab-slider').length - 1];
      lastSlider = $(lastSlider);
      lastSlider.on('init', (event, slick) => {
        collapseInit();
      })
    } else {
      lastSlider = $('.tab-slider');
      lastSlider = $(lastSlider);
      lastSlider.on('init', (event, slick) => {
        collapseInit();
      })
    }
  } else {
    collapseInit();
  }

  function collapseInit() {
    const collapseBodies = document.querySelectorAll('.tabs-page__content');
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
      const btn = body.querySelector('.tabs-page__btn');
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
  }


  if($('.collapse__content').length) {
    collapseInitAnother();
  }
  // Collapse another content
  function collapseInitAnother() {
    const collapseBodies = document.querySelectorAll('.collapse__content');
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
      const btn = body.querySelector('.collapse__btn');
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
  }



  // END collapse

  // DatePicker
  $.fn.datepicker.language['ua'] =  {
    days: ['неділя', 'понеділок', 'вівторок', 'среда', 'четвер', 'п\'ятница', 'субота'],
    daysShort: ['нд', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
    daysMin: ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    months: ['Лютий', 'Січень', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'],
    monthsShort: ['Лют', 'Січ', 'Бер', 'Квіт', 'Трав', 'Черв', 'Лип', 'Серп', 'Вер', 'Жовт', 'Лист', 'Груд'],
    today: 'Сьогодні',
    clear: 'Очистити',
    dateFormat: 'dd.mm.yyyy',
    timeFormat: 'hh:ii',
    firstDay: 1
  };

  // $$ change available range of days
  let minDay = new Date();
  let maxDay = new Date();
  maxDay.setDate(maxDay.getDate() + 2);

  $('.datepicker-booking').datepicker({
    autoClose: true,
    language: 'ua',
    minDate: minDay,
    maxDate: maxDay,
  })
  // End DatePicker






  // Success Toast
  const successMessage = document.querySelector('button.success');
  successMessage.addEventListener('click', e => {
    console.log('success');
    M.toast({html: '<span>Квартира заброньована!</span><button class="closeToast" onclick="M.Toast.dismissAll()" ></button>', classes: 'success', displayLength: 10000});

  })
  // Error Toast
  const errorMessage = document.querySelector('button.error');
  errorMessage.addEventListener('click', e => {
    M.toast({html: '<span>Квартира заброньована!</span><button class="closeToast" onclick="M.Toast.dismissAll()" ></button>', classes: 'error', displayLength: 4000});
  })
  //
  //  close Toast
  const closeToastBtns = document.querySelectorAll('.closeToast');
  closeToastBtns.forEach(closeBtn => {
    closeBtn.addEventListener('click', e => {
      console.log('sdsds');
    })
  })
//  End close Toast
})








