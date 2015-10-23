// Contructor
function daftPunkSong(_title){
	this.title = _title;
	this.artist = 'Daft Punk';

	// Wrong way!
	// function play(){
	this.play = function(){
		console.log(this.title + ' is playing.');
	}
};

var lucky = new daftPunkSong('Get Lucky');

daftPunkSong.prototype.stop = function(){
	console.log(this.title + ' has stopped playing.');
};

// myFunction();

// 1
var myFunction = function(){
	console.log('This is my function');
};

// 2
//  function myFunction (){
// 	console.log('This is my function');
// };

// Processing!
// DaftPunkSong(){

// 	var title;
// 	var artist;

// 	function DaftPunkSOng(_title){
// 		title = _title;
// 	}
// }