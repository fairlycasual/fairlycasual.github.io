//async await GET attempt

async function getObs() {
	try {
		let response = await fetch('http://api.mesowest.net/v2/stations/nearesttime?&stid=mtb42&units=ENGLISH&token=804c1eb09a394255beef8e84b68123bf');
		if (response.ok) {
			let jsonData = await response.json();
			//console.log(jsonData);
			let obs = jsonData.STATION[0].OBSERVATIONS.snow_depth_value_1;
			let snowDepth = obs.value;
			let timeStamp = obs.date_time;
                        let string = 'The snow depth at Heather Meadows is ' + snowDepth + ' inches at ' + timeStamp;
		       
			document.write(string);
			
			function populateTable(object) {
		   	var obj = obs;
		   	var table = $("<table />");
		   	table[0].border = "1";
		   	var columns = Object.keys(obj[0]);
		   	var columnCount = columns.length;
		   	var row = $(table[0].insertRow(-1));
		   	for (var i = 0; i < obj.lenght; i++) {
		   		var headerCell = $("<th />");
		   		headerCell.html([columns[i]]);
		   		row.append(headerCell);
		   	}

            for (var i = 0; i < obj.length; i++) {
            	row = $(table[0].insertRow(-1));
            	for (var j = 0; j < columnCount; j++) {
            		var cell = $("<td />");
            		cell.html(obj[i] [columns[j]]);
            		row.append(cell);
            	}
            }

            var dvTable = $("#dvCSV");
            dvTable.html("");
            dvTable.append(table);

        }

        populateTable(obs)

		   }


			
		
	throw new Error('Request Failed!');
	} catch (error) {
		//console.log(error);
	}

}
 
getObs();

