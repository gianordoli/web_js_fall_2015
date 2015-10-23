function concatUrl(query){
	console.log(query);
	var baseUrl = 'https://www.google.com/complete/search?';
	return baseUrl + query;
}

function callAPI(string){
	console.log(string);
	$.ajax({
			url: concatUrl(string),
			dataType: 'jsonp',
			data: {
				q: string,
				nolabels: 't',
				client: 'firefox',
				hl: 'en'
			},
			success: function(data) {
				console.log(data);
			},
			error: function(err){
				console.log(err);
			}
	});
}