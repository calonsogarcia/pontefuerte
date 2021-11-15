const router = require("express").Router();
const Cart = require("../models/Cart.model");
const Product = require("../models/Product.model")


// Get products list
router.get("/", (req, res, next) => {
    res.render("cart/cart.hbs");
  });

router.get("/:id", (req, res, next) => {
  const {cartId} = req.params.id;
  Cart.findById(cartId)
    .populate('product_id')
    .then((product) => {
      res.redirect("/carrito", {product});
    })
    .catch((err) => {next(err)});
  }); 

router.get("/pago", (req, res, next) => {
    res.render("cart/payment.hbs");
  });


module.exports = router;