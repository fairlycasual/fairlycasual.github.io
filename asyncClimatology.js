async function climatology() {
	try {
		let response = await fetch('https://api.mesowest.net/v2/stations/climatology?&stid=mtb42&startclim=01260000&endclim=01260000&token=7c19355e5a1d45d294ef3561d5852e93&units=english&vars=snow_depth');
		console.log(response);
		if (response.ok) {
			let jsonData = await response.json();
			//console.log(jsonData);
            		let timeStamp = jsonData.STATION[0].OBSERVATIONS.date_time;
           		 //console.log(timeStamp);
            		let snowDepth = jsonData.STATION[0].OBSERVATIONS.snow_depth_set_1;
            		console.log(snowDepth);


            		var trace1 = {
            		x: timeStamp,
            		y: snowDepth,
            		type: 'scatter',
            		mode: 'lines',
            		name: 'Snow Depth',
               		line: {
    			      color: 'rgb(219, 64, 82)',
                      	      width: 2
                      	      }
            		}; 

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
            			    xaxis: {title: 'Year',
					    tickfont: {
            			    	    size: 14,
					    color: 'rgb(107, 107, 107)'
            			            }
				     },
            			    yaxis: {title: 'Snow Depth',
					    tickfont: {
            			    	    size: 14,
					    color: 'rgb(107, 107, 107)'
            			            }
					   }
				
			           };
			

            var data = [trace1];
	    Plotly.newPlot('climatology', data, layout);
		    }
		} catch (error) { 
	       }
}
	

climatology()
