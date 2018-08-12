angular.module('cartControllers',[])
.controller('cartCtrl',function($http,$scope,$window, $rootScope){

  $scope.itemAddToCart=function(itemId,price){
    var itemToCart = {
        itemId: itemId,
        price:price,
    };
    if(!$window.localStorage.getItem('items')) {  
                var addToStorage = angular.toJson([{productName: itemToCart.itemId,price:itemToCart.price, quantity: 1}]);
                $window.localStorage.setItem('items', addToStorage);
            } else {
                var storedItems = [], itemFoundCheck = false;
                 storedItems = angular.fromJson($window.localStorage.getItem('items'));
              
                        //item.push(itemToCart.itemId);
                        console.log( typeof storedItems)
                        storedItems.forEach(function(itemFound) {
                            if (itemFound.productName === itemToCart.itemId) {
                                itemFound.quantity += 1;
                                itemFoundCheck = true;
                            }
                        });

                        if (!itemFoundCheck) {
                            storedItems.push({productName: itemToCart.itemId,price:itemToCart.price, quantity: 1});
                        }

                        // console.log(item)
                        $window.localStorage.setItem('items', angular.toJson(storedItems));
                    }
         $rootScope.cartItems=(angular.fromJson($window.localStorage.getItem('items')));

    
}
$scope.itemSubToCart=function(itemId){
    var itemToCart = {
        itemId: itemId,
    };
    if(!$window.localStorage.getItem('items')) {  
                var addToStorage = angular.toJson([{productName: itemToCart.itemId, quantity: 1}]);
                $window.localStorage.setItem('items', addToStorage);
            } else {
                var storedItems = [], itemFoundCheck = false;
                 storedItems = angular.fromJson($window.localStorage.getItem('items'));
              
                        //item.push(itemToCart.itemId);
                        console.log( typeof storedItems)
                        storedItems.forEach(function(itemFound) {
                            if (itemFound.productName === itemToCart.itemId && itemFound.quantity>=1 ) {
                                
                                itemFound.quantity -= 1;
                                itemFoundCheck = true;
                            }
                        });

                        // if (!itemFoundCheck) {
                        //     storedItems.push({productName: itemToCart.itemId, quantity: 1});
                        // }

                        // console.log(item)
                        $window.localStorage.setItem('items', angular.toJson(storedItems));
                    }
         $rootScope.cartItems=(angular.fromJson($window.localStorage.getItem('items')));
    
}
});