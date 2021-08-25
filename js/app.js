console.log('It works');


let menuToggle = document.getElementById('menu-toggle');
let menu = document.getElementById('menu');
let desktopSize = 1440;




menuToggle.addEventListener('click', () => {
  if (menu.classList.contains('open-menu')) {
    menu.classList.remove('open-menu');
  } else {
    menu.classList.add('open-menu');
  }
});

const removeMenu = () => {
  if (window.innerWidth >= desktopSize) {
    menu.classList.remove('open-menu');
  }
}

window.onresize = removeMenu;
