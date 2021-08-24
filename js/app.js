console.log('It works');


let menuToggle = document.getElementById('menu-toggle');
let menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  if (menu.classList.contains('open-menu')) {
    menu.classList.remove('open-menu');
  } else {
    menu.classList.add('open-menu');
  }
});
