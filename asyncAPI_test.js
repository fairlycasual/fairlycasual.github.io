//async await GET attempt

async function getObs() {
	try {
		let response = await fetch('http://api.mesowest.net/v2/stations/nearesttime?&stid=mtb42&units=ENGLISH&token=804c1eb09a394255beef8e84b68123bf');
		if (response.ok) {
			let jsonData = await response.json();
			console.log(jsonData);
		}
	throw new Error('Request Failed!');
	} catch (error) {
		console.log(error);
	}
}



