export let supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;

export function canUseWebP() {
  let elem = document.createElement('canvas');
  if (!!(elem.getContext && elem.getContext('2d'))) {
    return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }
  return false;
}
// img like a BG by Cassidy
export function ibg(isWebP) {
  let ibgs = document.querySelectorAll('.ibg');
  ibgs.forEach((item) => {
    if(item.querySelector('img')){
      item.style.backgroundImage = (isWebP)? 'url('+item.querySelector('source').getAttribute('srcset')+')' : 'url('+item.querySelector('img').getAttribute('src')+')'
    }
  })
}
//end img like BG
const isWebPi = canUseWebP();
ibg(isWebPi); // запуск перевірки IBG. Функція визначить і при можливості замінить формат даного класу з JPEG в WEBP.


//footer copyright====================================================
(function generateCopyRight() {
  let spanElement = document.createElement('span');
  spanElement.innerHTML = `©${new Date().getFullYear()}р. <a href="/">D-wave studio</a> `;
  if(document.querySelector('.copyright')) {
    document.querySelector('.copyright__main').append(spanElement);
  }
})();
// end footer copyright



// Work with form data $$

export function searchData(data) {
  console.log('Method searchData()');
  console.log(data);
}

export function filterData(data) {
  console.log('Method filterData()');
  console.log(data);
}

export function filterFlatData(data) {
  console.log('Method filterFlatData()');
  console.log(data);
}

export function bookingData(data) {
  console.log('Method bookingData()');
  console.log(data);
}

export function registerData(data) {
  console.log('Method registerData()');
  console.log(data);
}

export function loginData(data) {
  console.log('Method loginData()');
  console.log(data);
}
// Work with form data


