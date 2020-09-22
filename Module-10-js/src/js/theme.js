const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyRef = document.querySelector('body');
const inputRef = document.querySelector('.js-switch-input');
bodyRef.classList.add('light-theme');

let savedTheme = localStorage.getItem('theme');
if (savedTheme === Theme.DARK) {
  bodyRef.classList.add('dark-theme');
  inputRef.checked = true;
}

inputRef.addEventListener('change', handleThemeChange);
function handleThemeChange(event) {
  if (inputRef.checked === true) {
    bodyRef.classList.add('dark-theme');
    bodyRef.classList.remove('light-theme');
    sevedTheme = Theme.DARK;
  } else {
    bodyRef.classList.remove('dark-theme');
    bodyRef.classList.add('light-theme');
    sevedTheme = Theme.LIGHT;
  }
  localStorage.setItem('theme', sevedTheme);
}
