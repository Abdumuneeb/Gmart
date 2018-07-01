angular.module('appRoutes',['ngRoute'])

.config(function($routeProvider,$locationProvider){
$routeProvider

    .when('/', {
      templateUrl: 'app/views/pages/home.html'
    })
    .when('/home', {
      templateUrl: 'app/views/pages/home.html'
    })

    .when('/bread-&-bakery', {
      templateUrl: 'app/views/pages/bread-&-bakery.html'
    })

    .when('/G-branded', {
      templateUrl: 'app/views/pages/G-branded.html'
    })

    .when('/G-about-us', {
      templateUrl: 'app/views/pages/G-about-us.html'
    })

    .when('/G-best-deals', {
      templateUrl: 'app/views/pages/G-best-deals.html'
    })
    .when('/G-event', {
      templateUrl: 'app/views/pages/G-event.html'
    })
    .when('/G-spices', {
      templateUrl: 'app/views/pages/G-spices.html'
    })
    .when('/G-kitchen', {
      templateUrl: 'app/views/pages/G-kitchen.html'
    })
    .when('/G-products', {
      templateUrl: 'app/views/pages/G-products.html'
    })
    .when('/G-service', {
      templateUrl: 'app/views/pages/G-service.html'
    })
    .when('/G-petfood', {
      templateUrl: 'app/views/pages/G-pet-food.html'
    })
    .when('/G-admin', {
      templateUrl: 'app/admin/admin-pages/G-admin.html'
    })
    .when('/Gmail', {
      templateUrl: 'app/views/pages/Gmail.html'
    });




$locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
});

