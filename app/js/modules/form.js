window.addEventListener('DOMContentLoaded', () => {

//  select all reset all
  const selectsAll = document.querySelectorAll('.select-all');
  selectsAll.forEach(selectAll => {
    selectAll.addEventListener('click', e => {
      e.preventDefault();
      const parentBlock = selectAll.closest('.filter__block');
      const checkboxes = parentBlock.querySelectorAll('.input-checkbox input');
      checkboxes.forEach(checkbox => {
        checkbox.checked = true;
      })
    })
  })
  const resetsAll = document.querySelectorAll('.reset-all');
  resetsAll.forEach(resetAll => {
    resetAll.addEventListener('click', e => {
      e.preventDefault();
      const parentBlock = resetAll.closest('.filter__block');
      const checkboxes = parentBlock.querySelectorAll('.input-checkbox input');
      checkboxes.forEach(checkbox => {
        checkbox.checked = false;
      })
    })
  })
// end select all reset all


})