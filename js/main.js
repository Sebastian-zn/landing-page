const btt = document.querySelector('#btt');

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
