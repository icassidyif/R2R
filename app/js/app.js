import "./modules/function";
// import "./modules/bodymovin";
import "./modules/slick";
import "./modules/gallery";
// import './modules/scrollAnimation';
// import './modules/materialize';
// import './modules/validate';





window.addEventListener('DOMContentLoaded', () => {
  // Main menu
  const menu = document.querySelector('.header__menu');
  const logo = document.querySelector('.header__logo');
  const overlay = document.querySelector('.header__overlay');
  const burger = document.querySelector('.header__burger');
  if(logo.clientWidth + menu.clientWidth + 30 > window.innerWidth ) {
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

  // sectionMenuLinks.forEach(link => {
  //   link.addEventListener('click', e => {
  //     if(link.getAttribute('href') === '#') {
  //       e.stopPropagation();
  //       e.preventDefault();
  //       link.classList.toggle('active');
  //       sectionMenuLinks.forEach(link2 => {
  //         if(link !== link2) {
  //           link2.classList.remove('active');
  //         }
  //       })
  //       logoutMenuLink.classList.remove('active');
  //     }
  //   })
  // })

  // End Section menu
})








