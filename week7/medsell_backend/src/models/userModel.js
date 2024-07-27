const mongoose = require('mongoose');
// const {Schema} = mongoose; //destructuring
const Schema = mongoose.Schema;
const userSchema = new Schema({
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
        enum:["Admin", "User"],
        default: "User"
    },
    address:{
        type: String,
        require: true
    }

});

const User = mongoose.model("User", userSchema);
module.exports = User;