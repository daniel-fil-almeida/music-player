'use strict';

angular.module('my-app')
    .factory('songFactory', ['$http', function($http) {

    var urlBase = 'http://localhost:8080/api/';
    var songFactory = {};

    songFactory.all = function () {
        return $http.get(urlBase+"musics",{ cache: true});
    };

    songFactory.get = function (id) {
        return $http.get(urlBase+"musics/"+id,{ cache: true});
    };


    return songFactory;
}]);
