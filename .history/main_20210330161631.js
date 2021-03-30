const menuBtn = document.querySelector(".menu-btn");
const menuBurger = document.querySelector(".menu-btn__burger");
const nav = document.querySelector(".nav");
const headName = document.querySelector(".head-name");
const menuNav = document.querySelector(".menu-nav");
const menuNavList = document.querySelectorAll(".menu-nav__item");

let menuOpen = false;

menuBtn.addEventListener("click", toggleMenu);

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

const revadBtn = document.querySelector(".revad-btn");
const revadBurger = document.querySelector(".revad-btn__burger");
const revad = document.querySelector(".revad");

let revadOpen = false;

revadBtn.addEventListener("click", toggleRevad);

function toggleRevad() {
  if (!revadOpen) {
    revadBtn.classList.add("open");
    revadBurger.classList.add("open");
    revad.classList.add("open");

    revadOpen = true;
  } else {
    revadBtn.classList.remove("open");
    revadBurger.classList.remove("open");
    revad.classList.remove("open");

    revadOpen = false;
  }
}

var matchTable = document.querySelector("#matchTable");

function addMatchTile(data) {
  var matchTile = document.createElement("div");
  matchTile.classList.add("match-tile");

  var homeTeam = document.createElement("div");
  homeTeam.classList.add("team");

  var homeTileLogo = document.createElement("img");
  homeTileLogo.src = "";
  var homeTileName = document.createElement("p");
  homeTileName.innerHTML = "";

  var awayTeam = document.createElement("div");
  awayTeam.classList.add("team");
}

fetch("https://v3.football.api-sports.io/fixtures?live=all", {
  method: "GET",
  headers: {
    "x-rapidapi-host": "v3.football.api-sports.io",
    "x-rapidapi-key": "63548dd709dbcfe8bc4da3e64a0f2c18",
  },
})
  .then((response) =>
    response.json().then(function (data) {
      console.log(data);
      var matchesList = data["response"];
    })
  )
  .catch((err) => {
    console.log(err);
  });
