const express = require("express");
const router = express.Router();
const appController = require("../controllers/appController");

router.get("/allProducts", appController.home);
router.get("/create", appController.createProduct);
router.post("/create", appController.createProductPost);
router.get("/edit/:id", appController.editProduct);
router.post("/edit", appController.editProductPost);
router.get("/:id", appController.getProduct);
router.post("/remove/:id", appController.removeProduct);

module.exports = router;
