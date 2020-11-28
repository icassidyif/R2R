import $ from 'jquery';
import 'materialize-css';
import 'jquery-mask-plugin';
import 'jquery-validation';
import {searchData} from "./function";
import {bookingData} from "./function";
import {registerData} from "./function";
import {loginData} from "./function";
import {filterData} from "./function";
import {filterFlatData} from "./function";


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
        maxlength: 2,
        min: 1,
        number: true
      },
      floorTo: {
        required: false,
        maxlength: 2,
        min: 1,
        number: true
      },
      squareFrom: {
        required: false,
        maxlength: 3,
        min: 1,
        number: true
      },
      squareTo: {
        required: false,
        maxlength: 3,
        min: 1,
        number: true
      },
      priceFrom: {
        required: false,
        maxlength: 6,
        min: 1,
        number: true
      },
      priceTo: {
        required: false,
        maxlength: 6,
        min: 1,
        number: true
      },
    },
    messages: {
      floorFrom: {
        required: "",
        maxlength: '',
        min: '',
        number: ''
      },
      floorTo: {
        required: "",
        maxlength: '',
        min: '',
        number: ''
      },
      squareFrom: {
        required: "",
        maxlength: '',
        min: '',
        number: ''
      },
      squareTo: {
        required: "",
        maxlength: '',
        min: '',
        number: ''
      },
      priceFrom: {
        required: "",
        maxlength: '',
        min: '',
        number: ''
      },
      priceTo: {
        required: "",
        maxlength: '',
        min: '',
        number: ''
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



  $('#search-form-aside').validate({
    rules: {
      floorFrom: {
        required: false,
        maxlength: 2,
        min: 1,
        number: true
      },
      floorTo: {
        required: false,
        maxlength: 2,
        min: 1,
        number: true
        // customPhone: true
      },
      squareFrom: {
        required: false,
        maxlength: 3,
        min: 1,
        number: true
      },
      squareTo: {
        required: false,
        maxlength: 3,
        min: 1,
        number: true
      },
      priceFrom: {
        required: false,
        maxlength: 6,
        min: 1,
        number: true
      },
      priceTo: {
        required: false,
        maxlength: 6,
        min: 1,
        number: true
      },
    },
    messages: {
      floorFrom: {
        required: "",
        maxlength: '',
        min: '',
        number: ''
      },
      floorTo: {
        required: "",
        maxlength: '',
        min: '',
        number: ''
      },
      squareFrom: {
        required: "",
        maxlength: '',
        min: '',
        number: ''
      },
      squareTo: {
        required: "",
        maxlength: '',
        min: '',
        number: ''
      },
      priceFrom: {
        required: "",
        maxlength: '',
        min: '',
        number: ''
      },
      priceTo: {
        required: "",
        maxlength: '',
        min: '',
        number: ''
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


  $('#flats-form-aside').validate({
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
      filterFlatData(formData);
    }
  });


  $('#filter-form-aside').validate({
    submitHandler: function (form) {
      let formData = $(form).serializeArray();
      filterData(formData);
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
      'SignupForm[email]': {
        required: true,
        email: true
      },
      'SignupForm[r_name]': {
        required: true,
        twoWords: true
      },
      'SignupForm[phone]': {
        required: true,
        customPhone: true
      },
      'SignupForm[password]': {
        required: true,
        minlength: 6
      },
    },
    messages: {
      'SignupForm[email]': {
        required: 'Це обов\'язкове поле',
        email: 'Невірний email'
      },
      'SignupForm[r_name]': {
        required: "Це обов\'язкове поле",
        twoWords: 'Вкажіть ім\'я та прізвище'
      },
      'SignupForm[phone]': {
        required: "Це обов\'язкове поле",
        customPhone: 'Не вірний номер телефону',
      },
      'SignupForm[password]': {
        required: "Це обов\'язкове поле",
        minlength: 'Пароль повинен містити мінімум 6 символів'
      },
    },
    submitHandler: function (form) {
      // let formData = $(form).serializeArray();
      // registerData(formData);
      // form.reset();
      // const modal = document.querySelector('.login-block');
      // const modalInst = M.Modal.getInstance(modal);
      // modalInst.close();
      // M.toast({html: 'Дякуємо за реєсрацію!'});

      form.submit();
    }
  });


  $('#login-form').validate({
    rules: {
      'LoginForm[email]': {
        required: true,
        email: true
      },
      'LoginForm[password]': {
        required: true,
        minlength: 6
      },
    },
    messages: {
      'LoginForm[email]': {
        required: 'Це обов\'язкове поле',
        email: 'Невірний email'
      },
      'LoginForm[password]': {
        required: "Це обов\'язкове поле",
        minlength: 'Пароль повинен містити мінімум 6 символів'
      },
    },
    submitHandler: function (form) {
      // let formData = $(form).serializeArray();
      // loginData(formData);
      // form.reset();
      // const modal = document.querySelector('.login-block');
      // const modalInst = M.Modal.getInstance(modal);
      // modalInst.close();
      form.submit();
    }
  });


})
