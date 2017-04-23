'use strict';

angular.module('my-app')
    .factory('userFactory', ['$http', function($http) {

    var urlBase = 'http://localhost:8080/api/';
    var userFactory = {};

    userFactory.all = function () {
        return $http.get(urlBase+"users",{ cache: true});
    };

    userFactory.get = function (id) {
        return $http.get(urlBase+"users/"+id,{ cache: true});
    };

    return userFactory;
}]);
