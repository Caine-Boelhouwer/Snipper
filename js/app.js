var app = angular.module('snipper', ['ngRoute', 'ngToast', 'ngAnimate']);

app.config(function ($routeProvider) { 
    $routeProvider
        .when('/', {
            controller: 'OverviewCtrl',
            templateUrl: 'views/overview.html'
        })
        .when('/add', { 
            controller: 'AddCtrl', 
            templateUrl: 'views/add.html' 
        })
        .when('/edit/:id', { 
            controller: 'EditCtrl', 
            templateUrl: 'views/edit.html' 
        })
        .when('/detail/:id', { 
            controller: 'DetailCtrl', 
            templateUrl: 'views/detail.html' 
        })
        .otherwise({
            redirectTo: '/'
        });
});

app.config(['ngToastProvider', function(ngToastProvider) {
    ngToastProvider
        .configure({
            animation: 'fade',
            horizontalPosition: 'center',
            verticalPosition: 'top'
        });
}]);