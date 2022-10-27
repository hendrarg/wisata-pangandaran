const button = document.querySelector("#button");
const navMenu = document.querySelector('#nav-menu')

button.addEventListener("click", () => {
  button.classList.toggle("active");
  navMenu.classList.toggle("show")
});

window.onscroll = function () {
  const header = document.querySelector('header')
  const fixedNav = header.offsetTop

  if (window.pageYOffset > fixedNav) {
    header.classList.add('fixed')
  } else {
    header.classList.remove('fixed')
  }
}
