// MAYBE........ Somebody (another script) has created an
// app object already. If so, let's use it.
// If not, create a new object.
var app = app || {};

app.main = (function(){

	console.log('Your app starts here.');

	var privateInit = function(){
		console.log('Here goes whatever you wanna call first.');
		app.viz.drawChart();
	};

	// Everything you want to make public
	return {
		publicInit: privateInit
	}

})();

// WHAAAAAAAAAAAAAT?!?!?!
window.addEventListener('DOMContentLoaded', app.main.publicInit);