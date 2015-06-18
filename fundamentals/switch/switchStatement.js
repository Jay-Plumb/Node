var val = 1;

switch(String(val)) {
    	case '1':
            console.log('case 1 body');
        	break;
    	case '2':
            console.log('case 2 body');
        	break;
    	default:
    		console.log('Selection malformatted: %s', val);
         	process.exit(0);
		
}
