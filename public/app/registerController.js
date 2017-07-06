LoginAuth.controller('RegisterController', ['$scope', '$rootScope', 'httpService', '$location', function($scope, $rootScope, httpService, $location) {
  
  // Register request from user
  $scope.registerUser = function(user){
  	console.log('Inside register user !' + JSON.stringify(user));
  	
  	// Verify all input fields
  	if(!user || !user.email || !user.fullname || !user.password || !user.cpassword) {
  		return alert('All fields are required!');
  	}
  	
  	// Verify password and re-enter password
  	if(user.password !== user.cpassword) {
  		return alert('Password not matched!');
  	}

  	// Post request to register an user
  	httpService.post("/register", user, function(res){
      if(res.success) {
      	console.log('res: ' + JSON.stringify(res));
        $rootScope.isLogin = true;
        alert(res.info);
      } else{
      	console.log('res: ' + JSON.stringify(res));
        alert(res.info);
      };
    });
  }

  // Login request from frontend for user
  $scope.login = function(user) {
  	if(!user || !user.email || !user.password) {
  		return alert('All fields are required!');
  	}

  	// Request login api
    httpService.post('/login', user, function(res){
      if(res.success) {
        console.log('res: ' + JSON.stringify(res));
        alert('Login successful !');
        $location.path('/profile');
      } else {
        alert(res.info);
      }
    });
  }

  // Request facebook authentication
  $scope.authFacebook = function() {
    window.location="http://localhost:3000/facebook";
  }
}]);