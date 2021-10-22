const path = require('path');
const fs = require('fs');

let jsonProducts = fs.readFileSync(path.resolve(__dirname, '../db/product.json'), 'utf-8');
let productosLista = JSON.parse(jsonProducts); 


let productController = {

    product:(req, res) => {
        res.render('./products/product', {productosLista});
    },

   

    formCreate:(req, res) => {
        res.render('formCreate');
    },

    formEdit:(req, res) => {
        res.render('formEdit');
    }, 
    
}    

module.exports = productController; 