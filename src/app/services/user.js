'use strict';

angular.module('my-app')
    .factory('userFactory', ['$http', function($http) {

    var urlBase = 'http://localhost:8080/api/';
    var userFactory = {};

    userFactory.add = function () {
        return $http.get(urlBase+"users");
    };

    userFactory.get = function (id) {
        return $http.get(urlBase+"users/"+id);
    };


   

    return userFactory;
}]);
