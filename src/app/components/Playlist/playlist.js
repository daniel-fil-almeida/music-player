'use strict';

(function () {
    function playlistController($scope, songFactory) {
       
        $scope.status;
        $scope.songs;
        $scope.filteredSongs=0;
        $scope.playedSong=0;
      
       
        getSongs();

        function getSongs() {
            songFactory.all()
                .then(function (response) {
                    $scope.songs = response.data;
                    $scope.filteredSongs=response.data.lenght;

                }, function (error) {
                    $scope.status = 'Unable to load song data: ' + error.message;
                });

        }




        $scope.selectSong =function(song)
        {
            $scope.selectedSong=song
            $scope.playedSong=1
        }

        //Show controllers if exists any song searched

        $scope.shouldShowControllers =function(filteredSongs)
        {
            var countSongs=0;
            angular.forEach(filteredSongs, function(value, key) {
              countSongs++;
            });
            if (countSongs>0) {
              return true;      
            }
            else
            {
              return false;
            }
            
        }

        $scope.changeClass =function(index)
        {
            console.log(index);
            //angular.element("track-index"+index);
        }
        

        

    }


    angular.module('my-app')
        .component('playlist', {
            templateUrl: 'app/components/Playlist/playlist.html',
            controller: playlistController
        });
})();


