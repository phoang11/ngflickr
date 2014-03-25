/* Controllers */

var ngFlickrControllers = angular.module('ngFlickrControllers', []);

//Flickr API Key
var flickr_api_key = '99eb9fb89f9108327aaacab9833c1dd5';
var flickr_user_id = '83841932@N02';
 
ngFlickrControllers.controller('PhotoSetsListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $scope.photosets = [];
    
    $http({
      method: 'JSONP',
      url: 'https://api.flickr.com/services/rest/?method=flickr.photosets.getList',
      params: {
        'api_key': flickr_api_key,
        'user_id': flickr_user_id, 
        'format': 'json',
        'jsoncallback': 'JSON_CALLBACK'
      }
    })
    .success(function(data, status) {
      $scope.photosets = data.photosets.photoset;
    })
    .error(function(data, status) {
      alert(status);
    });

}]);

//user_id: 83841932@N02
// https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=9e00bd9ac5620eeb3d33ac566593dd06&user_id=83841932%40N02&format=json&api_sig=dfb1c8a82c9e840e9aa11367e274a6f0


ngFlickrControllers.controller('SetDetailCtrl', ['$scope', '$routeParams', '$http',
  
  function($scope, $routeParams, $http) {
    $scope.setID = $routeParams.setID;
    
    /*
    $scope.callMe = function(event){
    event = event || window.event;
    var target = event.target || event.srcElement,
        link = target.src ? target.parentNode : target,
        options = {index: link, event: event},
        links = this.getElementsByTagName('a');
    blueimp.Gallery(links, options);
    };
    */
    
    $http({
      method: 'JSONP',
      url: 'https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos',
      params: {
        'api_key': flickr_api_key,
        'photoset_id': $routeParams.setID,
        'format': 'json',
        'jsoncallback': 'JSON_CALLBACK'
      }
    })
    .success(function(data, status) {
      $scope.photos = data.photoset.photo;
    })
    .error(function(data, status) {
      alert(status);
    });
    

}]);
