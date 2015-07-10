var $ = require('jquery');
var template = require("./templates/helloWorld.hbs");
document.body.innerHTML = template({ name: "jay" });

$('body').css('background','blue');