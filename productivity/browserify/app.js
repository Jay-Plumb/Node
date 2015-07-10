var $ = require('jquery');
var template = require("./templates/helloWorld.hbs");
document.body.innerHTML = template({ name: "jsosn" });

$('body').css('background','gray');