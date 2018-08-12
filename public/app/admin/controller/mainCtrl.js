angular.module('mainControllers',['authServices'])
.controller('mainCtrl',function(Auth,$location,$timeout){

    var app=this; 

    this.doLogin =function(loginData){
        app.errorMsg=   false;
       // console.log(this.UserData);
        Auth.login(app.loginData).then(function(data){
        if(data.data.success){
            //create success message  
            app.successMsg=data.data.message;  
            //redirect to home page
            $timeout(function(){
                $location.path('/G-main');
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








