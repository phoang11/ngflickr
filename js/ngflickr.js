var ngFlickrApp = angular.module('ngFlickrApp', [
  'ngRoute',
  'ngFlickrControllers'
]);


ngFlickrApp.config(['$routeProvider',
  function($routeProvider) {
      $routeProvider
        .when('/', {
          controller: 'PhotoSetsListCtrl',
          templateUrl: 'templates/page.html'
        })
        .when('/photoset/:setID', {
          controller: 'SetDetailCtrl',
          templateUrl: 'templates/photoset.html'
        })
        .otherwise({
          redirectTo: '/'
      });
  }]);


