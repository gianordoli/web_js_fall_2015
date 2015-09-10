// MAYBE........ Somebody (another script) has created an
// app object already. If so, let's use it.
// If not, create a new object.
var app = app || {};

app.main = (function(){

	console.log('Your app starts here.');

	var init = function(){
		console.log('Here goes whatever you wanna call first.');
	};

	// Everything you want to make public
	return {
		init: init
	}

})();

// WHAAAAAAAAAAAAAT?!?!?!
window.addEventListener('DOMContentLoaded', app.main.init);