
/*
run mongod

run mongo
commands within mongo terminal:

show dbs
use blogroll
show collections
db.blogs.find().pretty()
*/
var express = require('express');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blogroll');

var Schema = mongoose.Schema;

var BlogSchema = new Schema({
	author: String,
	title: String,
	url: String
});

mongoose.model('Blog', BlogSchema);

var Blog = mongoose.model('Blog');

// Test code for mongodb 
var blog = new Blog({
	author: 'Jason',
	title: 'Jason\'s Blog',
	url: 'http://jasonsblog.com'
});

blog.save(); // Saves to our database

var app = express();

app.use(express.static(__dirname + '/public'));

var port = 3000;

app.listen(port);
console.log('server on ' + port);