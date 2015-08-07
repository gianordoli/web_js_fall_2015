// A lot of the next lines are based on Mani Nilchiani's Web3JS class, from Spring 2014
// For his original repo, see: https://github.com/web3js/animated-octo-hipster

/*------------------------------------------------*/
// single var declaration
/*------------------------------------------------*/

// instead of:
var distance = 20;
var speed = 4.5;
var vehicleType = 'bus';

// you can do:
var distance = 20,
    speed = 4.5,
    vehicleType = 'bus';

// Never drop the "var" when declaring variables!
// More on this later
currentValue = 5

// is totally not the same as
var currentValue = 5;


/*------------------------------------------------*/
// Data Types
/*------------------------------------------------*/

// String
var name = 'Luke Skywalker';
// side note: Strings have a '.length' property:
var numChars = name.length // 14


// Number
var height = 6.5;
// JS doesn't have floats and ints. if you want to clip decimals:
var intHeight = Math.round(height);


// Boolean
var isRad = true;


// null 
var name = null;
// null is a primitive data type. JS be like: no idea.


// undefined
var songCount;
// console.log(track); returns undefined. if a var is not defined, or
// but not initialized, it has an undefined value.


/*------------------------------------------------*/
// Debug!
/*------------------------------------------------*/
typeof name;


/*------------------------------------------------*/
// Array
/*------------------------------------------------*/
// Not a primitive! Arrays are objects instead
// More soon

var checkList = ['do laundry', 'write code', 'make wireframes', 'drink beer'];

// length of array
var len = checkList.length;

// add something to the end of array
checkList.push('cook dinner');