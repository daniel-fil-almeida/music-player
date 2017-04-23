'use strict';

(function () {
    var module = angular.module('my-app', [
        'app.templates',
        'ngComponentRouter', 
        'ui.router',
        'ui.bootstrap',
    ])
    .config(function($locationProvider) {
        $locationProvider.html5Mode(true);
    })
    .value('$routerRootComponent', 'app')
    .component('app', {
        template: `
            <header></header>
            <div class='mainContent'>
                <jumbotron></jumbotron>
                <ng-outlet></ng-outlet>
            </div>
            <footer>Daniel Almeida</footer>
        `,
        $routeConfig: [
            {path: '/', name: 'Playlist', component: 'playlist', useAsDefault: true},
            {path: '/song-list/', name: 'SongList', component: 'songList'},
            {path: '/song/detail/:id', name: 'SongDetail', component: 'songDetail'},
            {path: '/favourites', name: 'Favourites', component: 'favourites'},
        ]
    })
    .run(function ($rootScope) {

        console.log('my-app is running...');
    });


})();
