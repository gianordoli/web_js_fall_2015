var CronJob = require('cron').CronJob,
		 fs = require('fs');

new CronJob('30 * * * * *', function(){
	
	saveCurrTime();
	
}, null, true, 'UTC');

function saveCurrTime(){
	
	var myData = new Date();
	myData = myData.toString() + '\n';

	fs.appendFile('files/timestamps.txt', myData, function(err) {
		if (err) {
			console.log('error');
		} else {
			console.log('Writing file Async: ' + myData);
		}
	});
}