angular.module('app', ['ngRoute']).config(config);

function config($routeProvider, $locationProvider, $httpProvider){
    $locationProvider.hashPrefix('');
    $routeProvider.
        when('/', {
            templateUrl: 'angular-app/home/home.html'
        }).
        when('/manageproperty', {
            templateUrl: 'angular-app/manage-property/manage-property.html',
            controller: ManagePropertyController,
            controllerAs: 'vm'
        }).
        otherwise({
            redirectTo : '/'
        });

};