var User = require('../model/user');

module.exports = function(router){
//http://localhost:8000/user-api/user
//user Registration Route
 router.post('/user', function (req, res) {
        var user = new User();
        user.Email = req.body.Email;
        user.UserName = req.body.UserName;
        user.Password = req.body.Password;
        if(req.body.Email==null || req.body.Email=='' ||req.body.UserName==null || req.body.UserName==''|| req.body.Password==null || req.body.Password=='' )
      { res.json({ success:false,message:'Ensure username ,Email and password were provided'});
  }  else{
        user.save(function(err){
        if( err)
            {res.json({success:false, message:'UserName or Email already exist!'});
        }
        else {

            res.json({success:true,message:'User Created!'});
           }
        });
      }
    });
  //user Login Route
  router.post('/authenticate',function(req , res){
    User.findOne({ UserName : req.body.UserName}).select('email username password').exec(function(err, user){
     if (err) throw err;
      if(!user){
        res.json({ success:false , message: 'Could not authenticate user'});
      } else if(user){
        if(req.body.Password){
        var validPassword= user.comparePassword(req.body.Password);
         } else {
           res.json({success:false, message:'No Password Provided'});
         }
          if(!validPassword){
          res.json({success:false , message: 'Could not authenticate password'});
        } else{
          res.json({ success:true , message: 'User Authenticated'}); 
        }

          }

        });
  });

    return router;  
}