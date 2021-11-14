const { Schema, model } = require("mongoose");


const productSchema = new Schema ({
    image: String,
    name: String,
    description: String,
    price: String
})


const Product = model("Product", productSchema);

module.exports = Product;