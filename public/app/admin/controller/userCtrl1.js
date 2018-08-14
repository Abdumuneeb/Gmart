angular.module('UserController',[])
.controller('UserCtrl',function($http,$location,$timeout){
    
    var app=this; 

this.regUser =function(UserData){
    app.errorMsg=   false;
   // console.log(this.UserData);
    $http.post('/user-api/user',this.UserData).then(function(data){
    if(data.data.success){
        //create success message  
        app.successMsg=data.data.message;  
        //redirect to home page
        $timeout(function(){
            $location.path('/G-window');
        },2000);
        

    }

    else
    { 
        //create error message    
        app.errorMsg=data.data.message;
        //redirect to home page

    }
   
    });
};
});