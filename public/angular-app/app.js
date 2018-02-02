angular.module('app', ['ngRoute']).config(config);

function config($routeProvider, $locationProvider, $httpProvider){
    $httpProvider.interceptors.push('AuthInterceptor');
    $locationProvider.hashPrefix('');
    $routeProvider.
        when('/', {
            templateUrl: 'angular-app/home/home.html',
            access: {
                restricted: false
            }
        }).
        when('/manageproperty', {
            templateUrl: 'angular-app/manage-property/manage-property.html',
            controller: ManagePropertyController,
            controllerAs: 'vm',
            access: {
                restricted: true
            }
        }).
        otherwise({
            redirectTo : '/'
        });

};