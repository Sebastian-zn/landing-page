// Variables
const btt = document.querySelector('#btt');
// const toggleMenu = document.querySelector('#btn-menu');
const menu = document.querySelector('#menu');
const nav = document.querySelector('#nav');

// Back to Top Button
window.onscroll = () => {
  scrollFuntion();
}

function scrollFuntion() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    btt.style.display = 'block';
  } else {
    btt.style.display = 'none';
  }
}

function backtoTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
}

// Menu Button
function toggleMenu() {
  if(menu.style.display == 'none') {
    menu.style.display = 'block';
    nav.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    nav.style.backdropFilter = 'blur(5px)';
  } else {
    menu.style.display = 'none';
    nav.style.backdropFilter = 'unset';
  }
}
