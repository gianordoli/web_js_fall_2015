
(function test1(){
	console.log('testing #1');
})();

(function test2(var1, var2, var3){
	console.log('User sent ' + var1 + ', ' + var2 + ', ' + var3);
})('salmon', 'rice', 'juice');