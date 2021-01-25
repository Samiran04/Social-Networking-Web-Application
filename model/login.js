const mongoose=require('mongoose');
const Schema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true});
const Login=mongoose.model('Login',Schema);

module.exports=Login;