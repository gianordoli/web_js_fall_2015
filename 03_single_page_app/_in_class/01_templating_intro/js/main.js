// My 'html' with a variable
var myTemplate = 'Hello, <%= name %>, <%= age%>';

// compiled is a FUNCTION
// _.template() is an underscore function
var compiled = _.template(myTemplate);

var finalMsg = compiled({name: 'Shakti', age: 22});

console.log(finalMsg);