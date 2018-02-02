angular.module('app', ['ngRoute']).config(config);

function config($routeProvider, $locationProvider, $httpProvider){
    $locationProvider.hashPrefix('');
    $routeProvider.
        when('/', {
            templateUrl: 'angular-app/home/home.html'
        }).
        when('/property', {
            templateUrl: 'angular-app/property/property.html'
        }).
        when('/buy', {
            templateUrl: 'angular-app/property/buy.html'
        }).
        when('/rent', {
            templateUrl: 'angular-app/property/rent.html'
        }).
        when('/about', {
            templateUrl: 'angular-app/about/about.html'
        }).
        when('/contact', {
            templateUrl: 'angular-app/contact/contact.html'
        }).
        when('/manageuser', {
            templateUrl: 'angular-app/manage-user/manage-user.html'
        }).
        when('/manageproperty', {
            templateUrl: 'angular-app/manage-property/manage-property.html'
        }).
        otherwise({
            redirectTo : '/'
        });

};