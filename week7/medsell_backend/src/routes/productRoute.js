const express = require('express');
// const app = express();
const createProduct = require('../controllers/productController');

const router = express.Router();

router.post('/createProduct', createProduct);

module.exports = router;

//model, controller, route