const { Schema, model } = require("mongoose");


const cartSchema = new Schema ({
    productsAdded: [{
        type: Schema.Types.ObjectId,
        ref: "Product"
    }],
    totalProducts: Number,
    totalPrice: Number,
})


const Cart = model("Cart", cartSchema);

module.exports = Cart;