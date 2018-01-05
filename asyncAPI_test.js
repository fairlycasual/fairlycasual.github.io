//async await GET attempt

async function getObs() {
	try {
		let response = await fetch('http://api.mesowest.net/v2/stations/nearesttime?&stid=mtb42&units=ENGLISH&token=804c1eb09a394255beef8e84b68123bf');
		if (response.ok) {
			let obs = response.STATION[0].OBSERVATIONS.snow_depth_value_1;
			console.log(obs);
		}
	throw new Error('Request Failed!');
	} catch (error) {
		//console.log(error);
	}
}

getObs();

obs.onload = function heatherMeados(obs) {
	var snowDepth = obs['value'];
	var timeStamp = obs['date_time'];
	console.log(snowDepth);
	console.log(timeStamp);

	for (var i = 0; i < obs.length; i++) {
		var myArticle = document.createElement('article');
		var myPara1 = document.createElement('p');
		var myPara2 = document.createElement('p');
		

		myPara1.textContent = 'Current Heather Meadows snow depth is ' + snowDepth;
		myPara2.textContent = 'as of ' + timeStamp; 

		myArticle.appendChild(myPara1);
		myArticle.appendChild(myPara2);

		section.appendChild(myArticle);
		
		}

}
