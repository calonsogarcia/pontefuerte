/* 
function Cart(oldCart){
    this.products = oldCart.products || {};
    this.totalProducts = oldCart.totalProducts || 0;
    this.totalPrice = oldCart.totalPrice || 0;

    this.add = function (product, id) {
        let storedProduct = this.products[id];
        if(!storedProduct){
            storedProduct = this.products[id] = {product, qty: 0, pice: 0}
        }
        storedProduct.qty++;
        storedProduct.price = storedProduct.item.price * storedProduct.qty;
        this.totalProducts++;
        this.totalPrice += storedProduct.product.price;
    }

    this.productsArray= function(){
        let arr = [];
        for (let id in this.products){
            arr.push(this.products[id])
        }
        return arr;
    }
}

module.exports = Cart; */