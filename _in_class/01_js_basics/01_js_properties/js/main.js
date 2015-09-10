console.log('I\'m inside the file!');
var myNumber = 1;
var myDecimalNumber = 1.4;

var myName = 'Gabriel',
	herName = 'Shakti',
	otherName = 'Katherine';

// var myName, herName, otherName;

console.log(Math.round(myDecimalNumber));
console.log(Math.floor(myDecimalNumber));
console.log(Math.ceil(myDecimalNumber));

var myArray = [];
var myObj = {};

var mySong = {
	name: 'Get Lucky',
	artist: 'Daft Punk',
	stars: {
		nytimes: 3,
		spin: 5,
		spotify: 2
	},
	grammy: true,
	play: function(){
		console.log('This song is playing');
	}
};

var myOrderedObj = [
	'Gabriel',
	1,
	{name: 'Get Lucky'},
	{artist: 'Daft Punk'},
	{	play: function(){
			console.log('This song is playing');
		}
	}
];

mySong.play();
console.log('Spotify: ' + mySong.stars.spotify);
console.log('NY Times: ' + mySong['stars']['nytimes']);

var names = ['Shakti', 'Katherine', 'Alex'];
for(var i = 0; i < names.length; i++){
	console.log(names[i]);
}

for(var prop in mySong){
	console.log(prop + ': ' + mySong[prop]);
}

function anything (){
	console.log('anything');
	var j = 0;
};

anything();

console.log(i);
console.log(j);



