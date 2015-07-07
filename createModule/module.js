function hello() {
	return "hello";
}

function helloWord() {
	return hello() + ' again';
}

// Private function 
function privateFunc(number) {
	return number + 1;
}

function increment(number) {
	return privateFunc(number);
}

module.exports.hi = hello;
module.exports.helloAgain = helloWord;
module.exports.increment = increment;