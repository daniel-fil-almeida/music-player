'use strict';

function headerController($scope) {

	$scope.isLoggedin=false;

    $scope.login  = function() { 

	  alert("Not Done!");
    }


}

angular.module('my-app').component('header', {
    templateUrl: 'app/components/navigation/header.html',
    controller: headerController,
});
