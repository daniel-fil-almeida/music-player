'use strict';

angular.module('my-app')
    .factory('songFactory', ['$http', function($http) {

    var urlBase = 'http://localhost:8080/api/';
    var songFactory = {};

    songFactory.getSongs = function () {
        return $http.get(urlBase+"musics");
    };

    songFactory.getSong = function (id) {
        return $http.get(urlBase+"musics/"+id);
    };


   

    return songFactory;
}]);
