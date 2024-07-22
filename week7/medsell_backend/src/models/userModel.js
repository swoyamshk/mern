const mongoose = require('mongoose');
// const {Schema} = mongoose; //destructuring
const Schema = mongoose.Schema;
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require: true
    },
    age:{
        type:String,
        require: true
    },
    role:{
        type: String,
        enum:["Admin", "User"]
    }
    
})