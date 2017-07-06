LoginAuth.service('httpService', function($http){
	this.get = function(route, data, cb){
		// Validate parameters
		if(!route){
			cb ({success: false, info: "Cannot process this route!"})
		}
		// Process request
		$http.get(route, data).
		success(function(res){ cb ({success: res.success, info: res.info || "Request processed successfully!", res: res}) }).
		error(function(err){ cb ({success: false, info: "Unable to process request!", err: err}) })
	}

	this.post = function(route, data, cb){
		// Validate parameters
		if(!route){
			cb ({success: false, info: "Cannot process this route!"})
		}
		// Process request
		$http.post(route, data).
		success(function(res){ console.log('1. Went from here!'); cb ({success: res.success, info: res.info || "", res: res}) }).
		error(function(err){ console.log('2. Went from here!'); cb ({success: false, info: "Unable to process request!", err: err}) })
	}
})