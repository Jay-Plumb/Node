var model = require('./model');

// Call the function above
model.dataCall(5, 15, function(num) {
	// The anonymous function will run when the callback is called
	console.log("callback called: " + num);
});