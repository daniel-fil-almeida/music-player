'use strict';

(function () {
    function favouritesController($scope, userFactory, $rootRouter) {
        $scope.isLoggedin=false;
        $scope.alert = { type: 'danger', msg: "You can't access this page, please login first" }	
        $scope.id=0;
        getUser();

        function getUser() {

            userFactory.get($scope.id)
                .then(function (response) {
                    
                    $scope.user = response.data[0];
                    console.log($scope.user);
 
                }, function (error) {
                    $scope.user = 'Unable to load user data: ' + error.message;
                });
        }

        	    

	
    }

    angular.module('my-app').component('favourites', {
    	templateUrl: 'app/components/favourites/favourites.html',
    	controller: favouritesController,
	});



})();
