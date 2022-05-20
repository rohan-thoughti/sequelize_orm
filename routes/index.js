const productController = require("../controller/product");
const router = require("express").Router();

router.post("/addprops", productController.addProducts);
router.get("/getprops", productController.getAllProducts);
router.get("/getpropsbyid/:id", productController.getProductById);
router.patch("/updateprops/:id", productController.updateProduct);
router.delete("/deleteprops/:id", productController.deleteProduct);
router.get("/publishedprops", productController.publishedProduct);

module.exports = router;
