var source = document.getElementById("team-template").innerHTML;
var template = Handlebars.compile(source);

let urlTeams = 'https://api.football-data.org/v2/competitions/2002/teams';

fetch(urlTeams, {
	headers: {
		"x-auth-token": "819babcd7902454f930c154272296d78"
	}
})
	.then(response => response.json())
	.then(function (data) {
		let html = "";
		data.teams.forEach(element => {
			console.log(template(element));
			html += "<li><img src='" + element.crestUrl + "'/>" + element.id + " " + element.name + " " + " " + element.address + " " + element.founded + "</li>";
		})
		document.getElementById("teams").innerHTML = html;
	})