import $ from 'jquery';
import 'materialize-css';
import 'jquery-mask-plugin';
import 'jquery-validation';
import {searchData} from "./function";
import {bookingData} from "./function";
import {registerData} from "./function";
import {loginData} from "./function";


$(document).ready(function(){


  $(".input-phone").mask("+38 (999) 999-9*-**");
  $(".input-full-phone").mask("+38 (999) 999-99-99");

  $.validator.addMethod('customPhone', function (value, element) {
    return this.optional(element) || /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(value);
  }, "Please enter a valid phone number");

  let tagCheckRE = new RegExp("(\\w+)(\\s+)(\\w+)");
  $.validator.addMethod("twoWords", function(value, element) {
    return tagCheckRE.test(value);
  }, "At least two words.");



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
      detailsBooking: {
        required: true,
      },
      clientNameBooking: {
        required: true,
      },
      clientPhoneBooking: {
        required: true,
      },
      deadLineBooking: {
        required: true,
      }
    },
    messages: {
      detailsBooking: {
        required: 'Це обов\'язкове поле',
      },
      clientNameBooking: {
        required: 'Це обов\'язкове поле',
      },
      clientPhoneBooking: {
        required: "Це обов\'язкове поле",
      },
      deadLineBooking: {
        required: "Це обов\'язкове поле",
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

  $('#registration-form').validate({
    rules: {
      emailRegistration: {
        required: true,
        email: true
      },
      nameRegistration: {
        required: true,
        twoWords: true
      },
      phoneRegistration: {
        required: true,
        customPhone: true
      },
      passwordRegistration: {
        required: true,
        minlength: 6
      },
    },
    messages: {
      emailRegistration: {
        required: 'Це обов\'язкове поле',
        email: 'Невірний email'
      },
      nameRegistration: {
        required: "Це обов\'язкове поле",
        twoWords: 'Вкажіть ім\'я та прізвище'
      },
      phoneRegistration: {
        required: "Це обов\'язкове поле",
        customPhone: 'Не вірний номер телефону',
      },
      passwordRegistration: {
        required: "Це обов\'язкове поле",
        minlength: 'Пароль повинен містити мінімум 6 символів'
      },
    },
    submitHandler: function (form) {
      let formData = $(form).serializeArray();
      registerData(formData);
      form.reset();
      const modal = document.querySelector('.login-block');
      const modalInst = M.Modal.getInstance(modal);
      modalInst.close();
      M.toast({html: 'Дякуємо за реєсрацію!'});
    }
  });


  $('#login-form').validate({
    rules: {
      emailLogin: {
        required: true,
        email: true
      },
      passwordLogin: {
        required: true,
        minlength: 6
      },
    },
    messages: {
      emailLogin: {
        required: 'Це обов\'язкове поле',
        email: 'Невірний email'
      },
      passwordLogin: {
        required: "Це обов\'язкове поле",
        minlength: 'Пароль повинен містити мінімум 6 символів'
      },

    },
    submitHandler: function (form) {
      let formData = $(form).serializeArray();
      loginData(formData);
      form.reset();
      const modal = document.querySelector('.login-block');
      const modalInst = M.Modal.getInstance(modal);
      modalInst.close();
    }
  });


})
