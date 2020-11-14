import $ from 'jquery';
import 'materialize-css';
import 'jquery-mask-plugin';
import 'jquery-validation';
import {searchData} from "./function";
import {bookingData} from "./function";


$(document).ready(function(){


  $(".input-phone").mask("+38 (999) 999-9*-**");

  $.validator.addMethod('customPhone', function (value, element) {
    return this.optional(element) || /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(value);
  }, "Please enter a valid phone number");



  $('#search-form').validate({
    rules: {
      floorFrom: {
        required: false,
        maxlength: 2
      },
      floorTo: {
        required: false,
        maxlength: 2
        // customPhone: true
      },
      squareFrom: {
        required: false,
        maxlength: 3
      },
      squareTo: {
        required: false,
        maxlength: 3
      },
      priceFrom: {
        required: false,
        maxlength: 6
      },
      priceTo: {
        required: false,
        maxlength: 6
      },
    },
    messages: {
      floorFrom: {
        required: "",
        maxlength: ''
      },
      floorTo: {
        required: "",
        maxlength: ''
      },
      squareFrom: {
        required: "",
        maxlength: ''
      },
      squareTo: {
        required: "",
        maxlength: ''
      },
      priceFrom: {
        required: "",
        maxlength: ''
      },
      priceTo: {
        required: "",
        maxlength: ''
      },
    },
    submitHandler: function (form) {
      let formData = $(form).serializeArray();
      searchData(formData);
      const modal = document.querySelector('#search-block');
      const modalInst = M.Modal.getInstance(modal);
      modalInst.close();
    }
  });



  $('#booking-form').validate({
    rules: {
      clientPhoneBooking: {
        required: false,
      }
    },
    messages: {
      clientPhoneBooking: {
        required: "",
      }
    },
    submitHandler: function (form) {
      let formData = $(form).serializeArray();
      bookingData(formData);
      form.reset();
      const modal = document.querySelector('.booking-room');
      const modalInst = M.Modal.getInstance(modal);
      modalInst.close();
      M.toast({html: 'Квартира заброньована!'});
    }
  });



})
