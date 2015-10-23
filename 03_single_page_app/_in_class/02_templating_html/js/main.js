var render = function(viewId, data){
	console.log(viewId);	// the id where the template is
	console.log(data)

	// JQuery is grabbing the template for us
	var htmlTemplate = $('#'+viewId).html();

	// Send the htmlTemplate to a underscore _.template() function
	// and returns ANOTHER function (that is still waiting for data)
	var compiled = _.template(htmlTemplate);

	// Call the compiled function, sending the data
	// Returns the string with the variable
	var compiledHtml = compiled(data);
	
	// Actually rendering onto the html page
	$('#view').html(compiledHtml);
}
// Call the render function sending VIEW and MSG
// render('tpl-page-1', {name: 'Lucy', msg: 'Hello!'});
render('tpl-page-2', {users: ['Shakti', 'Udit', 'Julie', 'Kunal', 'Gabriel'] });