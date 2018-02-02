angular.module('app', ['ngRoute', 'angular-jwt']).config(config).run(run);

function config($routeProvider, $locationProvider, $httpProvider){
    $httpProvider.interceptors.push('AuthInterceptor');
    $locationProvider.hashPrefix('');
    $routeProvider.
        when('/', {
            templateUrl: 'angular-app/home/home.html',
            controller: HomeController,
            controllerAs: 'vm',
            access: {
                restricted: false
            }
        }).
        when('/home', {
            templateUrl: 'angular-app/home/home.html',
            controller: HomeController,
            controllerAs: 'vm',
            access: {
                restricted: false
            }
        }).
        when('/property', {
            templateUrl: 'angular-app/property/property.html',
            controller: PropertyController,
            controllerAs: 'vm',
            access: {
                restricted: false
            }
        }).
        when('/buy', {
            templateUrl: 'angular-app/property/buy.html',
            controller: PropertyController,
            controllerAs: 'vm',
            access: {
                restricted: false
            }
        }).
        when('/rent', {
            templateUrl: 'angular-app/property/rent.html',
            controller: PropertyController,
            controllerAs: 'vm',
            access: {
                restricted: false
            }
        }).
        when('/property/:id', {
            templateUrl: 'angular-app/property-by-id/property-by-id.html',
            controller: PropertyByIdController,
            controllerAs: 'vm',
            access: {
                restricted: false
            }
        }).
        when('/about', {
            templateUrl: 'angular-app/about/about.html',
            access: {
                restricted: false
            }
        }).
        when('/contact', {
            templateUrl: 'angular-app/contact/contact.html',
            access: {
                restricted: false
            }
        }).
        when('/login', {
            templateUrl: 'angular-app/login/login.html',
            controller: LoginController,
            controllerAs: 'vm',
            access: {
                restricted: false
            }
        }).
        when('/manageuser', {
            templateUrl: 'angular-app/manage-user/manage-user.html',
            controller: ManageUserController,
            controllerAs: 'vm',
            access: {
                restricted: true
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

function run($rootScope, $location, $window, AuthFactory) {
    $rootScope.$on('$routeChangeStart', function(event, nextRoute, currentRoute) {
        if (nextRoute.access !== undefined && nextRoute.access.restricted && !$window.sessionStorage.token && !AuthFactory.isLoggedIn) {
            event.preventDefault();
            $location.path('/');
        }
    });
}