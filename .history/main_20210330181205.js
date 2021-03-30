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

  var matchTeam = document.createElement("div");
  matchTeam.classList.add("match-team");

  var homeTeam = document.createElement("div");
  homeTeam.classList.add("team");

  var homeTileLogo = document.createElement("img");
  homeTileLogo.src = data["teams"]["home"]["logo"];
  var homeTileName = document.createElement("p");
  homeTileName.classList.add("pteam");
  homeTileName.innerHTML = data["teams"]["home"]["name"];
  var homeScore = document.createElement("p");
  homeScore.classList.add("pscore");
  homeScore.innerHTML = data["goals"]["home"];

  homeTeam.appendChild(homeTileLogo);
  homeTeam.appendChild(homeTileName);
  homeTeam.appendChild(homeScore);

  var awayTeam = document.createElement("div");
  awayTeam.classList.add("team");

  var awayTileLogo = document.createElement("img");
  awayTileLogo.src = data["teams"]["away"]["logo"];
  var awayTileName = document.createElement("p");
  awayTileName.classList.add("pteam");
  awayTileName.innerHTML = data["teams"]["away"]["name"];
  var awayScore = document.createElement("p");
  awayScore.classList.add("pscore");
  awayScore.innerHTML = data["goals"]["away"];

  awayTeam.appendChild(awayTileLogo);
  awayTeam.appendChild(awayTileName);
  awayTeam.appendChild(awayScore);

  var matchTime = document.createElement("p");
  matchTime.classList.add("match-time");
  matchTime.innerHTML = data["fixture"]["status"]["elapsed"] + "'";

  var matchTimer = document.createElement("div");
  matchTimer.classList.add("match-timer");

  var matchInfo = document.createElement("div");
  matchInfo.classList.add("match-info");
  matchTimer.appendChild(matchTime);

  matchTable.appendChild(matchTimer);
  matchTeam.appendChild(homeTeam);
  matchTeam.appendChild(awayTeam);
  matchTile.appendChild(matchTeam);
  matchTable.appendChild(matchTile);
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

      for (var i = 0; i < matchesList.length; i++) {
        addMatchTile(matchesList[i]);
      }
    })
  )
  .catch((err) => {
    console.log(err);
  });
