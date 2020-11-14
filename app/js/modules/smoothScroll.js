import $ from 'jquery';
import SmoothScroll from 'smooth-scroll';

//=========================================================================//init SmoothScroll========================================================
let scroll = new SmoothScroll('a[href*="#"]',{
  //header: '[data-scroll-header]',
  speed: 500,
  topOnEmptyHash: true,
  clip: true,
  easing: 'easeInOutCubic',

  updateURL: true,
  popstate: true
});
//=========================================================================
//=========================================================================//