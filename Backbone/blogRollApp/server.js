
// update = put requests
// delete = remove requests 
// 
/*
run mongod

run mongo
commands within mongo terminal:

show dbs
use blogroll
show collections
db.blogs.find().pretty()

remove entry: db.blogs.remove({"_id": ObjectId("558b3a8da1ec368f4b26edac") });
*/
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/blogroll');

var Schema = mongoose.Schema;

var BlogSchema = new Schema({
	author: String,
	title: String,
	url: String
});

mongoose.model('Blog', BlogSchema);

var Blog = mongoose.model('Blog');
/*
// Test code for mongodb 
var blog = new Blog({
	author: 'Jason',
	title: 'Jason\'s Blog',
	url: 'http://jasonsblog.com'
});

blog.save(); // Saves to our database
*/

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

// Put route in different file 
// ROUTES 
// GET
app.get('/api/blogs', function(req, res){
	Blog.find(function(err, docs) {
		docs.forEach(function(item){
			console.log('Received a GET request for _id: ' + item._id);
		});
		res.send(docs);
	});
});

// POST
// req.body uses bodyParser
app.post('/api/blogs', function(req, res){
	console.log('Received a POST request');
	for (var key in req.body) {
		console.log(key + ': ' + req.body[key]);
	}
	var blog = new Blog(req.body);
	blog.save(function(err, doc){
		res.send(doc);
	});
});

// DELETE
app.delete('/api/blogs/:id', function(req, res) {
	Blog.remove({_id: req.params.id}, function(err) {
		console.log('Received a delete request for _id: ' + req.params.id);
		res.send({_id: req.params.id});
	});
});

// PUT (update)
app.put('/api/blogs/:id', function(req, res) {
	console.log('Received an UPDATE request for _id: ' + req.params.id);
	Blog.update({_id: req.params.id}, req.body, function(err) {
		res.send({_id: req.params.ed});
	});
});

var port = 3000;

app.listen(port);
console.log('server on ' + port);