/*------------------------------------------------*/
// Underscore Templating
/*------------------------------------------------*/

var render = function(viewName, data){
	console.log('Rendering template for ' + viewName);
	console.log('Received data:');
	console.log(data);

	// Load the template from the html file
	var templateToCompile = $('#tpl-' + viewName).html();

	// Attach the template to the underscore function
	var compiled =  _.template(templateToCompile);

	// Send the data and display the result
	$('#view').html(compiled(data));
};

// underscore is waiting for an object called 'data'
// render('page-1', { data: { name: 'Gabriel', msg: 'Yo!' } } );
render('page-2', { data: { users: ['Gabriel', 'Shakti', 'Udit', 'Julie'] } });