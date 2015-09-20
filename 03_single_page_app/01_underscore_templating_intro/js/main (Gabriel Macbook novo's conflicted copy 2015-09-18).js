/*------------------------------------------------*/
// Underscore Templating
/*------------------------------------------------*/

/* define the template string with 1 placeholder */
var template = 'Hello, <%= name %>';

/* feed the template string to _.underscore - it gives us back a templating function */
var compiled =  _.template(template);