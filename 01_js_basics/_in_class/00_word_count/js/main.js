function wordCount(str){
	
	var res = str.split(" ");
	var countsObj = {};

	for(var i = 0; i< res.length; i++) {
    	var word = res[i];
    	if(!countsObj.hasOwnProperty(word)){
    		countsObj[word] = 1;
    	}else{
    		countsObj[word] ++;
    	}
	}
	// We're changing from: { love: 4, ... }
	// to: [ { word: 'love', count: 4 }, {}, ... ]
    var countsArray = _.map(countsObj, function(value, key, collection){
        return { word: key, count: value };
    });

    // Now that we have an Array we can use sortBy!
	var sortedArray = _.sortBy(countsArray, function(item, index, list){
		// Because underscore always returns in ascending order,
		// let's use a negative value for comparison... :S
		return -item.count;
	});
	console.log(sortedArray);
}