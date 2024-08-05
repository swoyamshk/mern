const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const authorizeRole = require("../middleware/authorizationMiddleware");
const categoryController = require("../controllers/categoryController");
const {addCategory} =  require("../controllers/categoryController");

/**
 * @description To get all categories
 * @api /api/category/create
 * @access PUBLIC
 * @type POST
 * @return response
 */

router.post("/create", auth, authorizeRole('admin'), categoryController.addCategory);
router.post("/update/:id", auth, authorizeRole('admin'), categoryController.updateCategory);
router.get("/getCategory/:id", auth, authorizeRole('admin'), categoryController.getCategory);


module.exports = router;