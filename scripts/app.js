console.log('It works');


let menuToggle = document.getElementById('menu-toggle');
let menu = document.getElementById('menu');
menuToggle.onclick = function() {
  menu.classList.add('open-menu');
