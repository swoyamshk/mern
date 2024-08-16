const express = require('express');
const router = express.Router();

const authMiddleware = require('../middleware/authMiddleware');
const authorizeRole = require("../middleware/authorizationMiddleware");
const { productImage } = require('../middleware/uploadMiddleware');
const {
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
  getAllProducts
} = require('../controllers/productController');

/**
 * @description Get all products
 * @route GET /api/products/getAllProducts
 * @access Public
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object} response - The response object containing an array of products
 */
router.get('/getAllProducts', getAllProducts);

/**
 * @description Get a single product by ID
 * @route GET /api/products/:id
 * @access Public
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object} response - The response object containing the product data
 */
router.get('/:id', getProduct);

/**
 * @description Create a new product
 * @route POST /api/products/createProduct
 * @access Private/Admin
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object} response - The response object containing the created product
 */
router.post('/createProduct', authMiddleware, authorizeRole('admin'), productImage.single('productImage'), createProduct);

/**
 * @description Update an existing product
 * @route PUT /api/products/:id
 * @access Private/Admin
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object} response - The response object containing the updated product
 */
router.put('/:id', authMiddleware, authorizeRole('admin'), productImage.single('productImage'), updateProduct);

/**
 * @description Delete a product
 * @route DELETE /api/products/:id
 * @access Private/Admin
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object} response - The response object confirming deletion
 */
router.delete('/:id', authMiddleware, authorizeRole('admin'), deleteProduct);

module.exports = router;
