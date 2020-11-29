import $ from "jquery";
import 'slick-carousel';
import 'materialize-css';

import {supportsTouch} from "./function";

document.addEventListener('DOMContentLoaded', function() {


  const allTabs = document.querySelectorAll('.tabs');
  let TabsInstances = M.Tabs.init(allTabs, {
  });

  const sliderTabs = document.querySelectorAll('.tab-slider-init');
  sliderTabs.forEach(tab => {
    tab.addEventListener('click', e => {
      setTimeout(function () {
        $('.tab-slider').slick('setPosition');
      },100)

    })
  })

  //  modals
  const modals = document.querySelectorAll('.modal');
  const modalsInstances = M.Modal.init(modals, {
    startingTop: '1%',
    endingTop: '3%',
    onOpenEnd: function () {
      const modalTabs = document.querySelectorAll('.modal .tabs');
      let modalTabsInstances = M.Tabs.init(modalTabs, {
      });
    }
  });
//  modals



});



