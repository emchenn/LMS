// public/js/app.js

var lmsApp = angular.module('lmsApp', ['ngLocationUpdate', 'ngRoute', 'appRoutes',
    'LoginCtrl', 'ProfileCtrl', 'ChatCtrl', 'UserCtrl', 'ProfilePublicCtrl',
'ProfileService', 'LoginService', 'UserService', 'ChatService', 'ProfilePublicService']);


//directives
lmsApp.directive('appNav', function(){
    return{
        restrict: 'E',
        templateUrl: 'js/directives/nav.html'
    };
});

