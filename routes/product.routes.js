const Product = require("../models/Product.model");

const router = require("express").Router();

// Get products list
router.get("/", (req, res, next) => {
  Product.find()
  .then((allProducts) => {
    res.render("products/product-list.hbs", {allProducts});
  })
  .catch((err) => {next(err)});
  });


//Create product
router.get("/create", (req, res, next) => {
  res.render("products/create-product.hbs");
});

router.post("/create", (req, res, next)=> {
  const {image, name, description, price} = req.body;
  Product.create({image, name, description, price})
  .then((product) => {
    res.redirect("/productos", {product})
  })
  .catch((err) => {next(err)});
})

// Get products details
router.get("/:id", (req, res, next) => {
    const {id} = req.params
    Product.findById(id)
    .then((product) => {
      res.render("products/product-details.hbs", {product});
    })
    .catch((err) => {
      next(err)});
  });

module.exports = router;