const router = require('express').Router();

router.post("/v1/login", require('../user/userController').singIn);
router.post("/v1/singup", require('../user/userController').singUp);
router.use(require('./auth').authenticate);
router.post("/v1/product", require('../product/productController').create);
router.get("/v1/product/:limit/:skip", require('../product/productController').getPaged);
router.delete("/v1/product/:id", require('../product/productController').deleteById);

module.exports = router;