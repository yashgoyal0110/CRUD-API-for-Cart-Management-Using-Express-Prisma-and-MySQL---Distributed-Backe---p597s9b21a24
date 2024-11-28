const express = require('express')
const authMiddleware = require("../middleware/authMiddleware")
const addProduct =  require("../controller/postController")
const getProduct =  require("../controller/getController")
const updateProduct =  require("../controller/patchController")
const deleteProduct =  require("../controller/deleteController")
const router = express.Router();
router.post("/addProduct", addProduct);
router.get('/getById/:id', authMiddleware, getProduct)
router.patch('/patch/:id', authMiddleware, updateProduct)
router.delete('/removeProduct/:id', authMiddleware,deleteProduct)
module.exports = router;




