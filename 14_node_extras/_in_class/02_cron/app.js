var CronJob	= require('cron').CronJob,
		fs	= require('fs');

// seconds, minutes, hours, days of the month, month, weekdays
new CronJob('0,15,30,45 * * * * *', function(){
	saveCurrTime();
}, null, true, 'UTC');

function saveCurrTime(){
	var myData = new Date();
	myData = myData.toString() + '\n';

	fs.appendFile('timestamps.txt', myData, function(err){
		if(err){
			console.log(err);
		}else{
			console.log('Writing file Async: ' + myData);
		}
	});
}