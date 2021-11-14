const router = require("express").Router();

// Get products list
router.get("/", (req, res, next) => {
    res.render("cart/cart.hbs");
  });


router.get("/pago", (req, res, next) => {
    res.render("cart/payment.hbs");
  });


module.exports = router;