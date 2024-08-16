const Product = require("../models/productModel");
const mongoose = require('mongoose');
const domain = "http://localhost:3000";

// Helper function to send error responses
const sendErrorResponse = (res, error) => {
  console.log(error);
  res.status(500).json({ msg: error.message });
};

// Create a new product (Admin Only)
const createProduct = async (req, res) => {
    try {
      const {
        category, // This should be an ObjectId
        name,
        price,
        description,
        brand,
        rating,
        numReviews,
        countInStock,
      } = req.body;
      
      // Ensure the category is an ObjectId
      const categoryId = mongoose.Types.ObjectId.isValid(category) ? category : null;
  
      if (!categoryId) {
        return res.status(400).json({ msg: "Invalid category ID" });
      }
  
      let productData = {
        category: categoryId,
        name,
        price,
        description,
        brand,
        rating,
        numReviews,
        countInStock,
      };
  
      if (req.file) {
        const productImage = `${domain}/uploads/products/${req.file.filename}`;
        productData.productImage = productImage;
      }
  
      const product = new Product(productData);
      await product.save();
  
      res.status(201).json({
        msg: "Product created successfully",
        product: product,
        success: true,
      });
    } catch (error) {
      sendErrorResponse(res, error);
    }
  };
  

// Update a product (Admin Only)
const updateProduct = async (req, res) => {
    try {
      const {
        category,
        name,
        price,
        description,
        brand,
        rating,
        numReviews,
        countInStock,
      } = req.body;
      
      // Ensure the category is an ObjectId
      const categoryId = mongoose.Types.ObjectId.isValid(category) ? category : null;
  
      if (category && !categoryId) {
        return res.status(400).json({ msg: "Invalid category ID" });
      }
  
      let updateData = {
        category: categoryId,
        name,
        price,
        description,
        brand,
        rating,
        numReviews,
        countInStock,
      };
  
      if (req.file) {
        const productImage = `${domain}/uploads/products/${req.file.filename}`;
        updateData.productImage = productImage;
      }
  
      const product = await Product.findByIdAndUpdate(req.params.id, updateData, {
        new: true,
      });
  
      if (!product) {
        return res.status(404).json({ msg: "Product not found" });
      }
  
      res.status(200).json({
        msg: "Product updated successfully",
        product: product,
        success: true,
      });
    } catch (error) {
      sendErrorResponse(res, error);
    }
  };
  

// Get all products (Public)

const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ msg: "Invalid product ID" });
    }
    
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ msg: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();  // Fetch all products from the database
    res.status(200).json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    sendErrorResponse(res, error);
  }
};

// Route setup

// Get all products (Public) and filter by category
const getProductsByCategory = async (req, res) => {
  try {
    const products = await Product.find({ category: req.params.categoryId });
    res.status(200).json(products);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

// // Get a single product by ID (Public)
// const getProduct = async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);

//     if (!product) {
//       return res.status(404).json({ msg: "Product not found" });
//     }

//     res.status(200).json(product);
//   } catch (error) {
//     sendErrorResponse(res, error);
//   }
// };

// Delete a product (Admin Only)
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({ msg: "Product not found" });
    }

    res
      .status(200)
      .json({ msg: "Product deleted successfully", success: true });
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

module.exports = {
  createProduct,
  updateProduct,
  getProduct,
  deleteProduct,
  getAllProducts
};