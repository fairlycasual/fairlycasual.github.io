async function climatology() {
	try {
		let response = await fetch('http://api.mesowest.net/v2/stations/climatology?&stid=mtb42&startclim=01250000&endclim=01260000&radius=mtb42,15&token=7c19355e5a1d45d294ef3561d5852e93&units=english&vars=snow_depth');
		if (response.ok) {
			let jsonData = await response.json();
			console.log(jsonData);
            		let timeStamp = jsonData.STATION[0].OBSERVATIONS.date_time;
           		 //console.log(timeStamp);
            		let snowDepth = jsonData.STATION[0].OBSERVATIONS.snow_depth_set_1;
            		console.log(snowDepth);


            var trace1 = {
            	x: timeStamp,
            	y: snowDepth,
            	type: 'scatter',
            	mode: 'lines',
            	name: 'Temp',
            	name: 'blue',
                line: {
    			      color: 'rgb(219, 64, 82)',
                      width: 2
                      },
            }; 

            // var trace2 = {
            // 	x: timeStamp,
            // 	y: dewPt,
            // 	type: 'scatter',
            // 	mode: 'lines',
            // 	name: 'Dew Point',
            //     line: {
    			     //  color: 'rgb(55, 128, 191)',
            //           width: 2
            //           },
            // }; 

            var layout = {
            			    title: '10-Year daily snow depth',
            			    titlefont: {
            			    	size: 16,
            			    	color: 'rgb(107, 107, 107)'
            			    },
            			    tickfont: {
            			    	size: 14,
            			    	color: 'rgb(107, 107, 107)'
            			    },
            			    xaxis: {tickfont: {
            			    	title: 'Time',
            			    	size: 14,
            			    	color: 'rgb(107, 107, 107)'
            			    },
            			    yaxis: {tickfont: {
            			    	title: 'Degrees C',
            			    	size: 14,
            			    	color: 'rgb(107, 107, 107)'
            			    }},

  				    width: 500,
  				    height: 500,
						 };

            var data = [trace1];

            Plotly.newPlot('climatology', data, layout);

		   
		}
	throw new Error('Request Failed!');
	} catch (error) {
		//console.log(error);
	}
  }

climatology()