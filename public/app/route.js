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
      .when('/G-baverages', {
      templateUrl: 'app/views/pages/G-baverages.html'
    })
    .when('/G-cart', {
      templateUrl: 'app/views/pages/G-cart.html'
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
    .when('/G-vegetables', {
      templateUrl: 'app/views/pages/G-vegetables.html'
    })
    .when('/G-fruits', {
      templateUrl: 'app/views/pages/G-fruits.html'
    })
    .when('/G-frozanFood', {
      templateUrl: 'app/views/pages/G-frozan-food.html'
    })
    .when('/G-admin', {
      templateUrl: 'app/admin/admin-pages/G-admin.html',
      controller: 'regCtrl',
      controllerAs : "register" 
      
    })
    .when('/Gmail', {
      templateUrl: 'app/views/pages/Gmail.html'
    });




$locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
});


