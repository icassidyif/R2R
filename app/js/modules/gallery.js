import $ from 'jquery';
import 'lightgallery';
import 'lightgallery/modules/lg-zoom.min'

$(document).ready(function() {
  $("#lightgallery").lightGallery({
    selector: '.item-gallery',
    zoom: true
  });


});