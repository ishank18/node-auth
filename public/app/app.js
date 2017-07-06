var LoginAuth = angular.module('LoginAuth', [
    'ngRoute'
]);

LoginAuth.controller('AppController', ['$scope', '$rootScope', function ($scope, $rootScope) {
  $rootScope.isLogin = true;
}]);

LoginAuth.controller('HeaderController', ['$scope', '$rootScope', function ($scope, $rootScope) {
  $rootScope.isLogin = true;
}]);

LoginAuth.controller('FooterController', ['$scope', '$rootScope', function ($scope, $rootScope) {
  $rootScope.isLogin = true;
}]);


LoginAuth.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	$routeProvider
  .when('/',{
    templateUrl:'app/register.html',
    controller: 'RegisterController'
  })
  .when('/profile',{
    templateUrl:'app/profile.html',
    controller: 'ProfileController'
  })
  .otherwise({
		redirectTo: '/',
	});
  $locationProvider.html5Mode(true);
}])
