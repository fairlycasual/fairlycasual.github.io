//async await GET attempt

async function getObs() {
	try {
		let response = await fetch('http://api.mesowest.net/v2/stations/nearesttime?&stid=mtb42&units=ENGLISH&token=804c1eb09a394255beef8e84b68123bf');
		if (response.ok) {
			let jsonData = await response.json();
			//console.log(jsonData);
			let snowObs = jsonData.STATION[0].OBSERVATIONS.snow_depth_value_1;
			let snowDepth = snowObs.value;
			let timeStamp = snowObs.date_time;
			let tempObs = jsonData.STATION[0].OBSERVATIONS.air_temp_value_1;
			let airTemp = tempObs.value;
                        let string = 'The snow depth at Heather Meadows is ' + snowDepth + ' inches as of ' + timeStamp + '. ' + 'The current air temperature is ' + airTemp + ' degrees Fahrenheit.';
		       
			console.log(tempObs);
			console.log(string);
			document.getElementById("conditions").innerHTML = string;
			
		}	
	throw new Error('Request Failed!');
	} catch (error) {
		//console.log(error);
	}

}
 
getObs();

