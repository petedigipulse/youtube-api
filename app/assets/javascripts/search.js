
function showResponse(response) {
	var responseString = JSON.stringify(response, "", 2); 
	document.getElementById('response').innerHTML += responseString;
}

function onClientLoad() {
	gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

function onYouTubeApiLoad() {
	gapi.client.setApiKey('AIzaSyCR5In4DZaTP6IEZQ0r1JceuvluJRzQNLE')

	search();
}

function search() {
	var request = gapi.client.youtube.search.list({
		part: 'id'
	});

	request.execute(onSearchResponse);
}

function onSearchResponse(response) {
	showResponse(response)
}