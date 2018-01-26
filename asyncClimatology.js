async function climatology() {
	try {
		let response = await fetch('http://api.mesowest.net/v2/stations/climatology?&stid=mtb42&startclim=01250000&endclim=01260000&radius=mtb42,15&token=7c19355e5a1d45d294ef3561d5852e93&output=json&units=english&vars=snow_depth');
		if (response.ok) {
			let jsonData = await response.json();
			let timeStamp = jsonData.STATION[0].OBSERVATIONS.date_time;
            console.log(timeStamp);
            let snowObs = jsonData.STATION[0].OBSERVATIONS.snow_depth_set_1;
            console.log(snowObs);
	}
}
		throw new Error('Request Failed!');
	} catch (error) {
		//console.log(error);
	}
}
