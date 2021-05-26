import './style.css';


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyTheme = document.querySelector('body');
const checkboxTheme = document.querySelector('.theme-switch__toggle');

checkboxTheme.addEventListener('change', changeColorBody);


bodyTheme.classList.add('light-theme');


function changeColorBody (){
  if (checkboxTheme.checked) {
    bodyTheme.classList.add('dark-theme');
    localStorage.setItem('Theme', Theme.DARK);
  } else {
    bodyTheme.classList.remove('dark-theme');
    bodyTheme.classList.add('light-theme');
    localStorage.removeItem(Theme.DARK);
    localStorage.setItem('Theme', Theme.LIGHT);
  };
  return
};
