$.ajax({
	url: 'http://api.mesowest.net/v2/stations/nearesttime?&stid=mtb42&units=ENGLISH&token=804c1eb09a394255beef8e84b68123bf',
	type: 'GET',
	dataType: 'json',
	success(response) {
	console.log(data)
	}, error(jqXHR, status, errorThrown) {
	console.log(error);
	}
});