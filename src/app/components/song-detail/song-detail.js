'use strict';

(function () {
    function songDetailController($scope, songFactory, $rootRouter) {
        $scope.song;

        this.$routerOnActivate = function(next, previous) {
            
            var song_id = next.params.id;  // Get the song identified by the route parameter
            songFactory.getSong(song_id).then(function(data) {
                
                $scope.song = data.data[0];
              
            });
        };



 
      
    }

    angular.module('my-app').component('songDetail', {
        templateUrl: 'app/components/song-detail/song-detail.html',
        controller: songDetailController
    });
})();
