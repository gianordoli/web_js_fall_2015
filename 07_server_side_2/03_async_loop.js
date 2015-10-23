var myWords = ['who', 'what', 'when'];
var results = [];

function callAPI(i, callback){

	$('autocompleteAPI', {
		q = myWords[i]
	}, function(data){
		results.push(data);

		// What's next?
		i++;

		// If I haven't got to the end yet, call the function again
		if(i < myWords.length){
			callAPI(i);

		// Else, append the data
		}else{
			appendData(results);
		}
	});
}

callAPI(0);
