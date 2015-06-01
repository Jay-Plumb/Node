
var fs = require('fs'),
file = '/home'; // TODO change this to dir path

var utility = module.exports = {
	readFileAsync: function(callback) {
		  fs.readFile(file,'utf8', function (err, data) {
   	 	callback(err, data);
		});
		}
}