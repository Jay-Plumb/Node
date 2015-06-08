var obj1 = {'key1':'value'};
var obj2 = {'key1':{'keya':'vala'},'key2':{'keyb':'valb'}};

for (var i in obj1) {
	console.log(i);
}
console.log('\n');

for (var i in obj2) {
	console.log(i + obj2[i]);
	for (var j in obj2[i]){

		console.log(j + ' ' + obj2[i][j]);
	}
}


