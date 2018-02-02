async function timeSeries() {
	try {
		let response = await fetch('https://api.mesowest.net/v2/stations/timeseries?&stid=mtb42&recent=7200&token=7c19355e5a1d45d294ef3561d5852e93&vars=air_temp,dew_point_temperature&obtimezone=local');
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
            			    title: 'Temp & Dew Point Temp',
            			    titlefont: {
            			    	size: 16,
            			    	color: 'rgb(107, 107, 107)'
            			    },
            			    tickfont: {
            			    	size: 14,
            			    	color: 'rgb(107, 107, 107)'
            			    },
            			    xaxis: {title: 'Time (PST)',
					    tickfont: {
            			    	    size: 14,
            			    	    color: 'rgb(107, 107, 107)'
            			    }},
            			    yaxis: {title: 'Temperature (Degrees C)',
					    tickfont: {
            			    	     size: 14,
            			    	     color: 'rgb(107, 107, 107)'
            			            }},

  							width: 1000,
  							height: 500,
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
