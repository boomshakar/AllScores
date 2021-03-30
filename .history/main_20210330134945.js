const menuBtn = document.querySelector(".menu-btn");
const menuBurger = document.querySelector(".menu-btn__burger");
const nav = document.querySelector(".nav");
const headName = document.querySelector(".head-name");
const menuNav = document.querySelector(".menu-nav");
const menuNavList = document.querySelectorAll(".menu-nav__item");
const revadBtn = document.querySelector(".revad-btn");
const revadBurger = document.querySelector(".revad-btn__burger");
const revadItem = document.querySelector(".revad-item");
const revad = document.querySelector(".revad");

let menuOpen = false;
let reavadOpen = false;

menuBtn.addEventListener("click", toggleMenu);
revadBtn.addEventListener("click", toggleRevad);

function toggleMenu() {
  if (!menuOpen) {
    menuBurger.classList.add("open");
    nav.classList.add("open");
    headName.classList.add("open");
    menuNav.classList.add("open");
    menuNavList.forEach((item) => item.classList.add("open"));

    menuOpen = true;
  } else {
    menuBurger.classList.remove("open");
    nav.classList.remove("open");
    headName.classList.remove("open");
    menuNav.classList.remove("open");
    menuNavList.forEach((item) => item.classList.remove("open"));

    menuOpen = false;
  }
}

function toggleRevad() {
  if (!revadOpen) {
    revadBtn.classList.add("open");
    revadBurger.classList.add("open");
    revadItem.classList.add("open");
    revad.classList.add("open");

    revadOpen = true;
  } else {
    revadBtn.classList.remove("open");
    revadBurger.classList.remove("open");
    revadItem.classList.remove("open");
    revad.classList.remove("open");

    revadOpen = false;
  }
}
