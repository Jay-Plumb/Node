var dataCall = function(arg1, arg2, callback) {
	// Generate a random number between arg1 and arg2
	var my_number = Math.ceil(Math.random() * (arg1 - arg2) + arg2);
	// Call the callback and pass the result
	callback(my_number);
} 


module.exports.dataCall = dataCall;
