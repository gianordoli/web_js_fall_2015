console.log('Running node app.');

var fs = require('fs');


/*----- Reading -----*/

var dataset;

// fs.readFile --> Async
fs.readFile('files/file_to_read.txt', function(err, data) {
    if (err) {
        console.log(err);
    } else {
        dataset = data.toString(); // convert to string
        // console.log('Async: ' + data); // Right!
    }
});

// Wrong!
// console.log(dataset);

// fs.readFileSync --> Sync
var readData = fs.readFileSync('files/file_to_read.txt');
readData = readData.toString(); // convert to string
console.log('Sync: ' + readData);


/*----- Writing -----*/

var myData = '2, 3, 4, 5, 6\n2, 3, 2, 7, 8';
// Create new file
// fs.writeFile --> Async
fs.writeFile('files/new_file.txt', myData, function(err) {
    if (err) {
        console.log('error');
    } else {
        console.log('Writing file Async: It is saved');
    }
});

// fs.writeFileSync --> Sync
fs.writeFileSync('files/new_file.txt', myData);
console.log('Saved file (sync)');


/*----- Appending -----*/

var moreData = '\n3, 4, 5, 6, 10\n6, 7, 2, 6, 5'
// fs.appendFile --> Async
fs.appendFile('files/new_file.txt', moreData, function (err) {
  if (err){
  	throw err;	
  }else{
  	console.log('The "data to append" was appended to file!');	
  }
});

// fs.appendFileSync --> Sync
fs.appendFileSync('files/new_file.txt', moreData);
console.log('The "data to append" was appended to file (sync)!');	

// var folders = fs.readdir('/', function(err, files){
//   console.log('My files:');
//   console.log(files);
// });










