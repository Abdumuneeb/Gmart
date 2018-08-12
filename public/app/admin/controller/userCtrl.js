angular.module('userControllers',[])
.controller('regCtrl',function($http,$scope,$window){
this.regUser= function(regData){
    console.log('form submitted ');
    console.log(this.regData);
    $http.post('/inventory-api/inventory',this.regData).then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    });
};
})

.controller('quantityctrl',function($scope){
var quantities=[ 
    {box:0},
    
 ];
 $scope.quantities=quantities;
 $scope.incrementLikes=function(quantity){
     quantity.box++;
     
 }

 
 $scope.decrementLikes=function(quantity){
     quantity.box--;
     
 }
 

//  $scope.itemAddToCart=function(itemId, itemQuantity){

//     var item = [];
//     var itemQunty = [];
//     var itemToCart = {
//         itemId: itemId,
//         itemQuantity: itemQuantity
//     };
//     item.push($window.localStorage.getItem('items'));
//     item.push(itemToCart.itemId);

//     itemQunty.push($window.localStorage.getItem('quantity'));
//     itemQunty.push(itemToCart.itemQuantity);


//     $window.localStorage.setItem('items', item);
// $window.localStorage.setItem('quantity', itemQunty);

// console.log($window.localStorage.getItem('items',item));
// console.log($window.localStorage.getItem('quantity',itemQunty));

//     $scope.cartItems=($window.localStorage.getItem('items',item));

// }
});




