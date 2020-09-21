	$('#btnRun').click(function() {

		$.ajax({
			url: "libs/php/getCountryInfo.php",
			type: 'POST',
			dataType: 'json',
			data: {
				country: $('#selCountry').val()
			},
			success: function(result) {

				console.log(result);

				if (result.status.name == "ok") {

					$('#txtContinent').html(result['data'][0]['continent']);
					$('#txtCapital').html(result['data'][0]['capital']);
					$('#txtLanguages').html(result['data'][0]['languages']);
					$('#txtPopulation').html(result['data'][0]['population']);
					$('#txtArea').html(result['data'][0]['areaInSqKm']);

				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
			}
		}); 
	

	});

	$('#btnRun2').click(function() {

		$.ajax({
			url: "libs/php/getWikiInfo.php",
			type: 'POST',
			dataType: 'json',
			data: {
				q: $('#sel1').val()
			},
			success: function(result) {

				console.log(result);

				if (result.status.name == "ok") {

					$('#txtWiki').html(result['data'][0]['summary']);
				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
			}
		}); 
	

	});

	// $('#btnRun3').click(function() {

	// 	$.ajax({
	// 		url: "libs/php/getWikiInfo.php",
	// 		type: 'POST',
	// 		dataType: 'json',
	// 		data: {
	// 			q: $('#q').val()
	// 		},
	// 		success: function(result) {

	// 			console.log(result);

	// 			if (result.status.name == "ok") {

	// 				$('#txtWiki2').html(result['data'][0]['summary']);
	// 			}
			
	// 		},
	// 		error: function(jqXHR, textStatus, errorThrown) {
	// 			// your error code
	// 		}
	// 	}); 
	

	// });