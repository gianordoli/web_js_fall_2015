// A lot of the next lines are based on Mani Nilchiani's Web3JS class, from Spring 2014
// For his original repo, see: https://github.com/web3js/animated-octo-hipster

/*------------------------------------------------*/
// Iteration
/*------------------------------------------------*/

// For loop
//on arrays:
var courses = ['thesis', 'web3', 'pcomp'];

for( var i = 0; i < courses.length; i++ ){
  console.log(courses[i]);  
}

//on objects
var thesis = {
  credits : 6,
  type : 'core',
  register : function() {
    login();
    enterData();
    submit();
  }   
};

for( var prop in thesis ) {
  console.log(prop, ' : ', thesis[prop]);
}


// While loop
var courses = ['thesis', 'web3', 'pcomp'],
  i = courses.length - 1;

while(i > -1){
  console.log(courses[i]);
  i --;
}
/* or, alternatively */
var i = courses.length;
while(i --){
  console.log(courses[i]);
}


// do while
// like while. But runs at least once
var courses = ['thesis', 'web3', 'pcomp'],
  i = courses.length - 1;

do {
  console.log(courses[i]); 
  i --; 
} while(i > -1);

