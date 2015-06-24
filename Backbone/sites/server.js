/*
Run in browser:
http://localhost:4711
*/
// Module dependencies
var application_root = __dirname,
		express = require('express'), // Web framework
		bodyParser = require('body-parser'), // Parser for reading request body
		path = require('path'), // Utilities for dealing with file paths
		mongoose = require('mongoose'); // MongoDB integration

// Create Server
var app = express();

// Where to sever static content
console.log(application_root);
app.use( express.static( application_root + '/public' ) );
app.use(bodyParser.json());
// Start Server
var port = 3001;

// Configure server using an anonymous function
app.listen(port);
console.log('server on ' + port);

