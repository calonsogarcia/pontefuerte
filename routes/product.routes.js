const router = require("express").Router();

// Get products list
router.get("/", (req, res, next) => {
    res.render("products/product-list.hbs");
  });

// Get products details
router.get("/:id", (req, res, next) => {
    res.render("products/product-details");
  });

module.exports = router;