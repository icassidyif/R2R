import $ from "jquery";
import 'slick-carousel';


$(document).ready(function () {

  $('.slider-section-single').slick({
    slidesToShow: 1,
    infinite: false,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    speed: 200,
    easing: 'ease',
    lazyLoad: 'ondemand',
    draggable: true,
    swipe: true,
    touchThreshold: 5,
    touchMove: true,
    accessibility: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          settings: "unslick",
          arrows: false,
        }
      }
    ]
  })

  $('.slider-section-nav').on('init', function(event, slick) {
    $('.slider-section-nav .slick-slide.slick-current .section__slider__item')[0].classList.add('active');
    })
    .slick({
    rows: 2,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    focusOnSelect: true,
    infinite: false,
    easing: 'ease',
    lazyLoad: 'ondemand',
    speed: 200,
    draggable: true,
    swipe: true,
    touchThreshold: 5,
    touchMove: true,
    responsive: [
      {
        breakpoint: 850,
        settings: {
          settings: "unslick",
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          settings: "unslick",
          slidesToShow: 3,
          rows: 1,
        }
      },
    ]
  });


  $('.slider-section-single').on('afterChange', function(event, slick, currentSlide) {
    let currentNavSlide = $(`.slider-section-nav .section__slider__item[data-item=${currentSlide}]`);
    let currentNavIndex = currentNavSlide.closest('.slick-slide').data('slick-index');
    $('.slider-section-nav').slick('slickGoTo', currentNavIndex);
    $('.slider-section-nav .section__slider__item').removeClass('active');
    currentNavSlide.addClass('active');
  });

  $('.slider-section-nav').on('click', '.section__slider__item', function(event) {
    event.preventDefault();
    let goToSingleSlide = $(this).data('item');
    $('.slider-section-single').slick('slickGoTo', goToSingleSlide);
  });




  $('.tab-slider').slick({
    arrows: true,
    dots: false,
    rows: 1,
    adaptiveHeight: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    easing: 'ease',
    infinite: false,
    initialSlide: 0,
    autoplay: false,
    pauseOnFocus: true,
    pauseOnHover: true,
    draggable: true,
    swipe: true,
    touchThreshold: 5,
    touchMove: true,
    waitForAnimate: true,
    centerMode: false,
    variableWidth: false,
    lazyLoad: 'ondemand',
    mobileFirst: true,
    accessibility: true,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          settings: "unslick",
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          settings: "unslick",
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          settings: "unslick",
          slidesToShow: 2,
        }
      }
    ]
  });


  $('.block-search-content__slider').slick({
    arrows: true,
    dots: false,
    adaptiveHeight: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    easing: 'ease',
    infinite: false,
    initialSlide: 0,
    autoplay: false,
    pauseOnFocus: true,
    pauseOnHover: true,
    draggable: true,
    swipe: true,
    touchThreshold: 5,
    touchMove: true,
    waitForAnimate: true,
    centerMode: false,
    variableWidth: false,
    lazyLoad: 'ondemand',
    mobileFirst: true,
    accessibility: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          settings: "unslick",
          slidesToShow: 2,
        }
      },

    ]
  });




})
