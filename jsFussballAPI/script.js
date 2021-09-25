let urlTeamsBundesliga = 'https://api.football-data.org/v2/competitions/2002/teams';
let urlTeamsPremierLeague = 'https://api.football-data.org/v2/teams';
let urlStandings = 'https://api.football-data.org/v2/competitions/2002/standings?season=2019';
let urlMatches = 'https://api.football-data.org/v2/matches';

let urlCountriesRapidAPI = 'https://api-football-beta.p.rapidapi.com/countries';

var source = document.getElementById("team-template").innerHTML;
var template = Handlebars.compile(source);

var standingSource = document.getElementById("standings-template").innerHTML;
var templateStandings = Handlebars.compile(standingSource);

var countriesTemplate = document.getElementById("countries-template").innerHTML;
var templateCountries = Handlebars.compile(countriesTemplate);

function loading() {
	return '<div class="loader"></div>';
}

function loadCountries() {
	document.getElementById("content").innerHTML = loading();
	fetch(urlCountriesRapidAPI, {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "api-football-beta.p.rapidapi.com",
			"x-rapidapi-key": "d347e19500msh01fe56559b72defp1a7d78jsn897bfe958df2"
		}
	}).then(response => response.json())
		.then(function (data) {
			let html = "<table class ='table'><thead class='thead-dark'><tr><th scope='col'></th><th scope='col'>Land</th></tr></thead><tbody>";
			data.response.forEach(element => {
				html += templateCountries(element);
			});

			html += "</tbody></table>";
			document.getElementById("content").innerHTML = html;
		})
		.catch(err => {
			console.warn("Something went wrong:" + err);
		});
}

function loadStandings() {
	document.getElementById("content").innerHTML = loading();
	fetch(urlStandings, {
		headers: {
			"x-auth-token": "819babcd7902454f930c154272296d78"
		}
	}).then(response => response.json())
		.then(function (data) {
			let html = "<table class ='table'><thead class='thead-dark'><tr><th scope='col'></th><th scope='col'>Team</th><th scope='col'>Position</th><th scope='col'>Punkte</th></tr></thead><tbody>";
			data.standings[0].table.forEach(element => {
				html += templateStandings(element);
			});

			html += "</tbody></table>";
			document.getElementById("content").innerHTML = html;
		});
}

function loadPremierLeagueTeams() {
	document.getElementById("content").innerHTML = loading();
	fetch(urlTeamsPremierLeague, {
		headers: {
			"x-auth-token": "819babcd7902454f930c154272296d78"
		}
	}).then(response => response.json())
		.then(function (data) {
			let html = "<table class ='table'><thead class='thead-dark'><tr><th scope='col'></th><th scope='col'>Team</th><th scope='col'>Address</th><th scope='col'>e-mail</th></tr></thead><tbody>";
			data.teams.forEach(element => {
				html += template(element);
			});
			html += "</tbody></table>";
			document.getElementById("content").innerHTML = html;
		}).catch(function (err) {
			console.warn("Something went wrong: " + err)
		});
}

function loadBundesligaTeams() {
	document.getElementById("content").innerHTML = loading();
	var source = document.getElementById("team-template").innerHTML;
	var template = Handlebars.compile(source);

	fetch(urlTeamsBundesliga, {
		headers: {
			"x-auth-token": "819babcd7902454f930c154272296d78"
		}
	})
		.then(response => response.json())
		.then(function (data) {
			let html = "<table class ='table'><thead class='thead-dark'><tr><th scope='col'></th><th scope='col'>Team</th><th scope='col'>Position</th><th scope='col'>Punkte</th></tr></thead><tbody>";
			data.teams.forEach(element => {
				html += template(element);
			});
			html += "</tbody></table>"
			document.getElementById("content").innerHTML = html;
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

function onClickCountriesButton() {
	document.getElementById("buttonCountries").addEventListener("click", function () {
		loadCountries();
	})
}

function onClickHomeButton() {
	document.getElementById("home").addEventListener("click", function () {
		document.getElementById("content").innerHTML = '<div id="content"></div>';
	})
}

onClickPremierLeagueButton();
onClickBundesligaButton();
onClickStandingsButton();
onClickCountriesButton();
onClickHomeButton();