const express = require("express");

const router = express.Router();

const listAllSkusAndProductsIdController = require("./controllers/listAllSkusAndProductsIdController");
const listProductController = require("./controllers/listProductController");
const listSKUController = require("./controllers/listSKUController");

router.get("/list-all-skus", listAllSkusAndProductsIdController.store);
router.get("/list-products", listProductController.store);
router.get("/list-skus", listSKUController.store);

module.exports = router;
