let urlTeamsBundesliga = 'https://api.football-data.org/v2/competitions/2002/teams';
let urlTeamsPremierLeague = 'https://api.football-data.org/v2/teams';
let urlStandings = 'https://api.football-data.org/v2/competitions/2002/standings?season=2019';

var source = document.getElementById("team-template").innerHTML;
var template = Handlebars.compile(source);

var standingSource = document.getElementById("standings-template").innerHTML;
var templateStandings = Handlebars.compile(standingSource);

function loadStandings() {
	fetch(urlStandings, {
		headers: {
			"x-auth-token": "819babcd7902454f930c154272296d78"
		}
	}).then(response => response.json())
		.then(function (data) {
			let html = "";
			data.matches.forEach(element => {
				html += templateStandings(element);
			});
			document.getElementById("standings").innerHTML = html;
		});
}


function loadPremierLeagueTeams() {

	fetch(urlTeamsPremierLeague, {
		headers: {
			"x-auth-token": "819babcd7902454f930c154272296d78"
		}
	}).then(response => response.json())
		.then(function (data) {
			let html = "";
			data.teams.forEach(element => {
				html += template(element);
			});
			document.getElementById("teamsPremierLeague").innerHTML = html;
		}).catch(function (err) {
			console.warn("Something went wrong: " + err)
		});
}

function loadBundesligaTeams() {

	var source = document.getElementById("team-template").innerHTML;
	var template = Handlebars.compile(source);

	fetch(urlTeamsBundesliga, {
		headers: {
			"x-auth-token": "819babcd7902454f930c154272296d78"
		}
	})
		.then(response => response.json())
		.then(function (data) {
			let html = "";
			data.teams.forEach(element => {
				html += template(element);
			});
			document.getElementById("teamsBundesliga").innerHTML = html;
		}).catch(function (err) {
			console.warn("Something went wrong: " + err)
		});
}

function onClickBundesligaButton() {
	document.getElementById("buttonBundesliga").addEventListener("click", function () {
		loadBundesligaTeams();
	})
}

function onClickPremierLeagueButton() {
	document.getElementById("buttonPremierLeague").addEventListener("click", function () {
		loadPremierLeagueTeams();
	})
}

function onClickStandingsButton() {
	document.getElementById("buttonStandings").addEventListener("click", function () {
		loadStandings();
	})
}

onClickPremierLeagueButton();
onClickBundesligaButton();
onClickStandingsButton();