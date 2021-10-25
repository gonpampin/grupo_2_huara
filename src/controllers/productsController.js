const path = require('path');
const fs = require('fs');

let jsonProducts = fs.readFileSync(path.resolve(__dirname, '../db/product.json'), 'utf-8');
let productosLista = JSON.parse(jsonProducts); 


let productController = {

    product:(req, res) => {
        res.render('./products/product', {productosLista});
    },


    formCreate:(req, res) => {
        res.render('./products/formCreate');
    },

    formEdit:(req, res) => {
        res.render('./products/formEdit');
    }, 

    detail: (req, res) => {
        let id = req.params.id;
        let productoDetalle = productosLista.find(product => {
            return product.id == id;
        })

        res.render('products/productDetail', { products: productoDetalle });
    }
    

}    

module.exports = productController; 