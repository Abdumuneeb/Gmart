var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt= require('bcrypt-nodejs');   


var UserSchema = new Schema({
Email:{type:String, lowercase:true, required:true,unique:true},
UserName :{type:String,lowercase:true , required:true,unique:true},
Password:{type:String,required:true},

}, { collection: 'user' });

UserSchema.pre('save',function(next){

    var user  =this;
    bcrypt.hash(user.Password,null , null, function(err,hash){
        if(err) return next(err);
    user.Password=hash;
     next();

    });
});


UserSchema.methods.comparePassword =function(Password){
    return bcrypt.compareSync(Password,this.Password); 
};

module.exports=mongoose.model('user',UserSchema);