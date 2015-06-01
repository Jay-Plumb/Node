var utility = require('./utility.js');

utility.readFileAsync(function(err, data){
	if(err){
		process.exit(1);
	}
	console.log(data);
});
