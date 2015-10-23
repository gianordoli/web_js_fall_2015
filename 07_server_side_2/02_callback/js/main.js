function peelPotatoes(potato){
	console.log('I\'m peeling ' + potato);
}

function slicePotatoes(potato){
	console.log('I\'m slicing ' + potato);
}

function fryPotatoes(potato, callback){
	console.log('I started frying ' + potato);
	/*------------- Wait for a while ---------------*/
	var friedPotato = potato;	// Imagine that some transformation happened
	callback(friedPotato);
}

function bakePotatoes(potato, callbackObj){
	console.log('I started baking ' + potato);
	/*------------- Wait for a while ---------------*/
	var bakedPotato = potato;	// Imagine that some transformation happened
	/*------------- Something happens.... ---------------*/
	var somethingWentWrong = true;
	if(somethingWentWrong){
		callbackObj.error('Ooooops... I think I burned them.');	
	}else{
		callbackObj.success(bakedPotato);
	}
}

function cookPotatoes(potato){
	console.log('Called cookPotatoes');
	peelPotatoes(potato);
	slicePotatoes(potato);

	fryPotatoes(potato, function(transformedPotato){
		
		// console.log('I finished cooking ' + transformedPotato);
		bakePotatoes(transformedPotato,
			{
				success: function(newPotato){
					console.log('I finished cooking ' + newPotato);
				},
				error: function(msg){
					console.log(msg);
				}			
			}
		);
	});
}

cookPotatoes('myBeautifulPotato');