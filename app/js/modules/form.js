window.addEventListener('DOMContentLoaded', () => {

//  select all reset all
  const selectsAll = document.querySelectorAll('.block-search__control .select-all');
  selectsAll.forEach(selectAll => {
    selectAll.addEventListener('click', e => {
      const parentBlock = selectAll.closest('.block-search');
      const checkboxes = parentBlock.querySelectorAll('.input-checkbox input');
      checkboxes.forEach(checkbox => {
        checkbox.checked = true;
      })
    })
  })
  const resetsAll = document.querySelectorAll('.block-search__control .reset-all');
  resetsAll.forEach(resetAll => {
    resetAll.addEventListener('click', e => {
      const parentBlock = resetAll.closest('.block-search');
      const checkboxes = parentBlock.querySelectorAll('.input-checkbox input');
      checkboxes.forEach(checkbox => {
        checkbox.checked = false;
      })
    })
  })
// end select all reset all


})