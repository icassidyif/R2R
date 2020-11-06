import $ from 'jquery';
import 'materialize-css';
import {supportsTouch} from "./function";

document.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('.tabs');
  let TabsInstances = M.Tabs.init(tabs, {

  });






  // All modal windows
  // let modals = document.querySelectorAll('.modal:not(.body-project__content)');
  // if (supportsTouch) {
  //   let modalInstances = M.Modal.init(modals, {
  //     startingTop: '0%',
  //     endingTop: '0%'
  //   });
  // } else {
  //   let modalInstances = M.Modal.init(modals);
  // }
  // END All modal windows



});



