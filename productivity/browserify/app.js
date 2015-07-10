var $ = require('jquery');
var template = require("./templates/helloWorld.hbs");
var template2 = require("./templates/byeWorld.hbs");
//document.body.innerHTML = template({ name: "jssn" });
 $("body").append(template({ name: "jssn" }));
 $("body").append(template2({ name: "jssn" }));

$('body').css('background','gray');