'use strict';

angular.module('karadeeApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/sheet/:sheetID', {
        templateUrl: 'views/sheet.html',
        controller: 'SheetCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
