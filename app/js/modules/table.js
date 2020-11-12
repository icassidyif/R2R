console.log('table');

window.addEventListener('DOMContentLoaded', () => {
  // filters
  const currency = document.querySelectorAll('.filter-table__currency li');
  currency.forEach((link,index,arr) => {
    link.addEventListener('click', e => {
      arr.forEach(link2 => {
        link2.classList.remove('active');
      })
      e.target.classList.add('active');
    })
  })

  const rooms = document.querySelectorAll('.filter-table__rooms li');
  rooms.forEach(room => {
    room.addEventListener('click', e => {
      e.target.classList.toggle('active');
    })
  })
  // end filters
})