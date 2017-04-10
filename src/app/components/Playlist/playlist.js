'use strict';

(function () {
    function playlistController($scope, songFactory) {
       
        $scope.status;
        $scope.songs;
        

        $scope.subjects = ['Math', 'Physics', 'Chemistry', 'Hindi', 'English'];

        getSongs();

        function getSongs() {
            songFactory.getSongs()
                .then(function (response) {
                    console.log(response.data);
                    $scope.songs = response.data;
                }, function (error) {
                    $scope.status = 'Unable to load song data: ' + error.message;
                });
        }

        

        

    }


    angular.module('my-app')
        .component('playlist', {
            templateUrl: 'app/components/Playlist/playlist.html',
            controller: playlistController
        });
})();
