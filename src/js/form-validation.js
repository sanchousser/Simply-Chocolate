var inputs = [].slice.call(document.querySelectorAll('.input-js')),
  button = document.querySelector('.button-js');

inputs.forEach(function (el) {
  el.addEventListener('input', checkInputs, false);
});
function checkInputs() {
  var empty = inputs.filter(function (el) {
    return el.value.trim() === '';
  }).length;
  if (button.disabled = empty !== 0);
}
checkInputs();