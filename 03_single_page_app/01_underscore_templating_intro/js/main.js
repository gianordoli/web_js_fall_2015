/*------------------------------------------------*/
// Underscore Templating
/*------------------------------------------------*/

/* 1. define the template string with 1 placeholder */
var template = 'Hello, <%= name %>';

/* 2. feed the template string to _.underscore - it gives us back a templating function */
var compiled =  _.template(template);

/* 3. Call the function sending a variable */
console.log(compiled({name: 'shakti'}));