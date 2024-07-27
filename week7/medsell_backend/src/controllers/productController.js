//controllers to save

const Product = require("../models/productModel");

const createProduct = async(req, res)=>{
    const {name, price, category} = req.body;
    const addProduct = new Product({
        name :name,
        price: price,
        category: category
    });

    try{
        const response = await addProduct.save();
        if(response){
            res.status(201).json({message:"Product created sucessfully", response} )
        }
    }
    catch(err){
        res.status(500).json({message:"internal server error", err});
    }

}

module.exports = createProduct;