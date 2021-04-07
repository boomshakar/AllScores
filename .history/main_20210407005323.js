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

  var matchTime = document.createElement("p");
  matchTime.classList.add("match-time");
  matchTime.innerHTML = data["fixture"]["status"]["elapsed"] + "'";

  var matchTimer = document.createElement("div");
  matchTimer.classList.add("match-timer");
  matchTimer.appendChild(matchTime);

  var matchScore = document.createElement("div");
  matchScore.classList.add("match-score");

  matchScore.appendChild(homeScore);
  matchScore.appendChild(awayScore);

  var matchInfo = document.createElement("div");
  matchInfo.classList.add("match-info");

  var logoName = document.createElement("span");
  logoName.classList.add("logo-name");
  var leagueLogo = document.createElement("img");
  var leagueName = document.createElement("p");
  leagueName.classList.add("league-name");
  leagueLogo.src = data["league"]["logo"];
  leagueName.innerHTML = data["league"]["name"];
  logoName.appendChild(leagueLogo);
  logoName.appendChild(leagueName);
  matchInfo.appendChild(logoName);

  matchTable.appendChild(matchInfo);
  matchTeam.appendChild(homeTeam);
  matchTile.appendChild(matchTimer);
  matchTeam.appendChild(awayTeam);
  matchTile.appendChild(matchTeam);
  matchTile.appendChild(matchScore);
  matchTable.appendChild(matchTile);
}

var matchTableDesk = document.querySelector("#matchTableDesk");
function addMatchTileDesk(data) {
  var matchTileDesk = document.createElement("div");
  matchTileDesk.classList.add("match-tile-desk");

  var matchTeamDesk = document.createElement("div");
  matchTeamDesk.classList.add("match-team-desk");

  var homeTeamDesk = document.createElement("div");
  homeTeamDesk.classList.add("team-desk");

  var homeTileLogo = document.createElement("img");
  var homeTileName = document.createElement("p");

  homeTileLogo.src = data["teams"]["home"]["logo"];
  homeTileName.innerHTML = data["teams"]["home"]["name"];

  homeTeamDesk.appendChild(homeTileLogo);
  homeTeamDesk.appendChild(homeTileName);

  var awayTeamDesk = document.createElement("div");
  awayTeamDesk.classList.add("team-desk");

  var awayTileLogo = document.createElement("img");
  var awayTileName = document.createElement("p");

  awayTileLogo.src = data["teams"]["away"]["logo"];
  awayTileName.innerHTML = data["teams"]["away"]["name"];

  awayTeamDesk.appendChild(awayTileLogo);
  awayTeamDesk.appendChild(awayTileName);

  var matchScoreDesk = document.createElement("div");
  matchScoreDesk.classList.add("match-score-desk");
  matchScoreDesk.innerHTML =
    data["goals"]["home"] + " : " + data["goals"]["away"];

  matchTileDesk.appendChild(matchTimer);
  matchTileDesk.appendChild(homeTeamDesk);
  matchTileDesk.appendChild(matchScoreDesk);
  matchTileDesk.appendChild(awayTeamDesk);
  matchTableDesk.appendChild(matchTileDesk);
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
        addMatchTileDesk(matchesList[i]);
      }
    })
  )
  .catch((err) => {
    console.log(err);
  });

var leagueName = document.querySelector("#league-name");
var tableCrate = document.querySelector("#table-crate");

function addLeagueTableDesk(data) {
  var tableRow = document.createElement("tr");
  tableRow.classList.add("tblrow");

  var rankTd = document.createElement("td");
  rankTd.classList.add("rank");
  rankTd.innerHTML = data["rank"];

  var teamNameTd = document.createElement("td");
  teamNameTd.classList.add("team-name");
  teamNameTd.innerHTML = data["teamName"];

  var matchPlayTd = document.createElement("td");
  matchPlayTd.classList.add("match-played");
  matchPlayTd.innerHTML = data["all"]["matchsPlayed"];

  var goaldiffTd = document.createElement("td");
  goaldiffTd.classList.add("goaldiff");
  goaldiffTd.innerHTML = data["goalsDiff"];

  var pointsTd = document.createElement("td");
  pointsTd.classList.add("points");
  pointsTd.innerHTML = data["points"];

  tableRow.appendChild(rankTd);
  tableRow.appendChild(teamNameTd);
  tableRow.appendChild(matchPlayTd);
  tableRow.appendChild(goaldiffTd);
  tableRow.appendChild(pointsTd);
  tableCrate.appendChild(tableRow);
}

fetch("https://api-football-v1.p.rapidapi.com/v2/leagueTable/2790", {
  method: "GET",
  headers: {
    "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
    "x-rapidapi-key": "f3666f333cmsh302b5634d41171bp1f5ceajsn7e396f7db55c",
  },
})
  .then((response) =>
    response.json().then((data) => {
      console.log(data);
      var leagueTable = data["api"]["standings"][0];

      leagueName.innerHTML = leagueTable[0]["group"];

      for (var i = 0; i < leagueTable.length; i++) {
        addLeagueTable(leagueTable[i]);
      }
    })
  )
  .catch((err) => {
    console.log(err);
  });

// fetch("https://api-football-v1.p.rapidapi.com/v2/fixtures/live", {
//   method: "GET",
//   headers: {
//     "x-rapidapi-key": "f3666f333cmsh302b5634d41171bp1f5ceajsn7e396f7db55c",
//     "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
//   },
// })
//   .then((response) =>
//     response.json().then((data) => {
//       console.log(data);
//     })
//   )
//   .catch((err) => {
//     console.error(err);
//   });
