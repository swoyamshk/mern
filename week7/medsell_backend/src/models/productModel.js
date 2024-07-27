const mongoose = require('mongoose');
// const {Schema} = mongoose; //destructuring
const Schema = mongoose.Schema;
const productSchema = new Schema({
    name:{
        type:String,
        require: true
    },
    price:{
        type:String,
        require: true
    },
    category:{
        type: String,
        enum:["Medicine", "SkinCare"],
        default: "Medicine"
    }

});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;