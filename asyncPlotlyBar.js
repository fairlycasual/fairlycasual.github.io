async function getObs() {
	try {
		let response = await fetch('http://api.mesowest.net/v2/stations/timeseries?&stid=mtb42&recent=14400&token=7c19355e5a1d45d294ef3561d5852e93&vars=snow_depth&units=english');
		if (response.ok) {
			let jsonData = await response.json();
			//console.log(jsonData);
			let snowObs = jsonData.STATION[0].OBSERVATIONS.snow_depth_set_1;
            console.log(snowObs);
            let timeStamp = jsonData.STATION[0].OBSERVATIONS.date_time;
            console.log(timeStamp);
            
          
                var bar1 = {
            	x: timeStamp,
            	y: snowObs,
            	type: 'bar',
            }; 

           var data = [bar1];

           var layout = {
            			    title: 'Snow Depth',
            			    titlefont: {
            			    	size: 16,
            			    	color: 'rgb(107, 107, 107)'
            			    },
            			    tickfont: {
            			    	size: 14,
            			    	color: 'rgb(107, 107, 107)'
            			    },
            			    xaxis: {tickfont: {
            			    	title: 'Date',
            			    	size: 14,
            			    	color: 'rgb(107, 107, 107)',
            			    }},
            			    yaxis: {tickfont: {
            			    	title: 'Snow Depth (Inches)',
            			    	size: 14,
            			    	color: 'rgb(107, 107, 107)'
            			    }},

  							width: 1000,
  							height: 500,
						 };


            Plotly.newPlot('snowdepth', data, layout);
		}
	throw new Error('Request Failed!');
	} catch (error) {
		//console.log(error);
	}
 
}
 
getObs()
