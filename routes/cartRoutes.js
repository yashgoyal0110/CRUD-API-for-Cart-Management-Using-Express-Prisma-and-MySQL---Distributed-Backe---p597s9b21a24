const express = require("express");
const addProduct = require("../controller/postController");
const getProduct = require("../controller/getController");
const updateProduct = require("../controller/patchController");
const deleteProduct = require("../controller/deleteController");
const router = express.Router();
router.post("/addProduct", addProduct);
router.get("/getById/:id", getProduct);
router.patch("/patch/:id", updateProduct);
router.delete("/removeProduct/:id", deleteProduct);
module.exports = router;
