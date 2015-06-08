var localConfig = {
	arrayOfArgv: [],
	LOGPATH: ''
}

var utility = module.exports = {

	init: function(config) {
		localConfig.arrayOfArgv = config.arrayOfArgv;
		localConfig.LOGPATH = config.LOGPATH;
		console.log(localConfig);

	}
}
