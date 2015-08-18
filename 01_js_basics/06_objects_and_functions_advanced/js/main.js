// A lot of the next lines are based on Mani Nilchiani's Web3JS class, from Spring 2014
// For his original repo, see: https://github.com/web3js/animated-octo-hipster

/*------------------------------------------------*/
// Objects and Functions Advanced
/*------------------------------------------------*/

// Declare an object like a function.
// This is called a contructor
function DaftPunkSong(title) {
    this.title = title;
    this.artist = 'Daft Punk';

  /* A closure is an inner function that has access to the outer (enclosing) function’s 
   variables—scope chain. The closure has three scope chains: it has access to its own scope 
   (variables defined between its curly brackets), it has access to the outer function’s variables, 
   and it has access to the global variables. */    
    this.play = function(){
      console.log('Playing ' + this.title);
    }
}

var lucky = new DaftPunkSong('Get Lucky');
console.log(lucky);
var oneMore = new DaftPunkSong('One More Time');
console.log(oneMore);
lucky.play();

// If you need to add a property to the Contructor AFTER creating it:
DaftPunkSong.prototype.stop = function(){
  console.log('Stopping ' + this.title);
}
lucky.stop();

// Is this really a DaftPunkSong?
console.log(lucky instanceof DaftPunkSong);

/*------------------------------------------------*/
// Scope
/*------------------------------------------------*/

// No BLOCK-LEVEL scope!
var test = true;
// the blocks in this if statement do not create a local context for the name variable
if (test) {
  var name = "Jack"; // this name is the global name variable and it is being changed to "Jack" here
}
console.log (name); // Wooooot?! Try that in Processing!

// Functions create a scope, though
function testingAgain(){
  var lastName = 'the Ripper';
}
// console.log(lastName);


/*------------------------------------------------*/
// Time
/*------------------------------------------------*/
// // setTimeout
// // JS be like: wait N ms before doint that thing.
// window.setTimeout(function() {
//   alert('yo');
// }, 2000);

// // JS be like: wait N ms between repetitions.
// window.setInterval(function() {
//   alert('yay');
// }, 2000);
