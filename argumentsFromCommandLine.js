	if(process.argv[2]){
  		file = process.argv[2];
  		console.log('taking user input');
	} else {
		console.log('using default');
  		file = '$HOME';
	}
console.log(process.argv[0] + ' ' + process.argv[1] + ' ' + process.argv[2]);