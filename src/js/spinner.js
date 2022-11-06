function spinnerToggle() {
  document.querySelector('.loader-overlay').classList.toggle('is-open');
}
function hideSpinner() {
  document.querySelector('.loader-overlay').classList.remove('is-open');
}

export { spinnerToggle, hideSpinner };
