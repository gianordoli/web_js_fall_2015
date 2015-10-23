var app = {};

app.main = (function(){
	var menu = {
		'salmon': 6,
		'pork': 5,
		'beef': 8,
		'chicken': 4,
		'rice': 2,
		'juice': 3,
		'beer': 8,
		'wine': 12,
		'cheesecake': 5,
		'apple pie': 5
	};

	// PUBLIC: setter
	var setNewItem = function(key, value){
		if(!menu.hasOwnProperty(key) && value > 0){
			menu[key] = value;
		}
	}

	// Everything I return here will be made public
	// THIS IS THE SAME THING AS...
	var myPublicObj = {};
	// myPublicObj.menu = menu;
	myPublicObj.setNewItem = setNewItem;
	return myPublicObj;

	// ...THIS ONE HERE
	// return {
	// 	menu: menu,
	// 	setNewItem: setNewItem
	// }

})();