// A lot of the next lines are based on Mani Nilchiani's Web3JS class, from Spring 2014
// For his original repo, see: https://github.com/web3js/animated-octo-hipster

/*------------------------------------------------*/
// Objects
/*------------------------------------------------*/

// Object
// Declaring AND adding properties
var mySong = {
  name : 'Get lucky', // commas, not semicolons!
  artist : 'Daft Punk',
  stars : 5,
  grammy : true,
  play : function() {
    // do some stuff
  }
};
// It is said that pretty much everything in JS is an object. We'll see how shortly.

console.log(mySong.name);
// I usually prefer instead
console.log(mySong['name']);

// You can add properties later too
mySong.year = 2013;


/*------------------------------------------------*/
// Functions
/*------------------------------------------------*/

// define functions in either of these two ways:

// A) anonymous functions, part of what JS is famous for.
var makeItHappen = function() {
  console.log('I\'m anonymous!');
};

// B) named function
function makeItHappenAgain() {
  // do magic 
  console.log('I have a name!');
};

// Calling
makeItHappen();
makeItHappenAgain();