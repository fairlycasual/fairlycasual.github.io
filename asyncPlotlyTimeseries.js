async function timeSeries() {
	try {
		let response = await fetch('http://api.mesowest.net/v2/stations/timeseries?&stid=mtb42&recent=1440&token=7c19355e5a1d45d294ef3561d5852e93&vars=air_temp,dew_point_temperature');
		if (response.ok) {
			let jsonData = await response.json();
			//console.log(jsonData);
			let tempObs = jsonData.STATION[0].OBSERVATIONS.air_temp_set_1;
            console.log(tempObs);
            let timeStamp = jsonData.STATION[0].OBSERVATIONS.date_time;
            console.log(timeStamp);
            let dewPt = jsonData.STATION[0].OBSERVATIONS.dew_point_temperature_set_1d;
            console.log(dewPt);


            var trace1 = {
            	x: timeStamp,
            	y: tempObs,
            	type: 'scatter',
            	mode: 'lines',
            	name: 'Temp',
            	name: 'Red',
                line: {
    			      color: 'rgb(219, 64, 82)',
                      width: 2
                      },
            }; 

            var trace2 = {
            	x: timeStamp,
            	y: dewPt,
            	type: 'scatter',
            	mode: 'lines',
            	name: 'Dew Point',
                line: {
    			      color: 'rgb(55, 128, 191)',
                      width: 2
                      },
            }; 

            var layout = {
  							width: 1000,
  							height: 500
						 };

            var data = [trace1, trace2];

            Plotly.newPlot('timeseries', data, layout);

		   
		}
	throw new Error('Request Failed!');
	} catch (error) {
		//console.log(error);
	}
  }
 
timeSeries()