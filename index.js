const homeScore = document.getElementById("home-score");
const awayScore = document.getElementById("away-score");
let homePoints = 0;
let awayPoints = 0;

function addOnePoint() {
    homePoints += 1;
    homeScore.innerHTML = homePoints;
}

function addTwoPoints() {
    homePoints += 2;
    homeScore.innerHTML = homePoints;
}

function addThreePoints() {
    homePoints += 3;
    homeScore.innerHTML = homePoints;
}

function addOnePointAway() {
    awayPoints += 1;
    awayScore.innerHTML = awayPoints;
}

function addTwoPointsAway() {
    awayPoints += 2;
    awayScore.innerHTML = awayPoints;
}

function addThreePointsAway() {
    awayPoints += 3;
    awayScore.innerHTML = awayPoints;
}