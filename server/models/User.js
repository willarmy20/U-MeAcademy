const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    userName: {
        type:String,
        require: true,
        min: 3, 
        max: 20,
        unique: true
    },
    email: {
        type:String,
        require: true,
        max: 50,
        unique: true
    },
    passWord: {
        type: String,
        require: true,
        min: 6,
    },
    cart: {
        type: Array, 
        default : [],
        
    },
    isAdmin: {
        type: Boolean, 
        default : false,
        
    },
    
   

    
    },
{timestamps: true} 
);
module.exports = mongoose.model("User", UserSchema)