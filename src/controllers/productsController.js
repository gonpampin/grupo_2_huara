const path = require('path');
const fs = require('fs');

let jsonProducts = fs.readFileSync(path.resolve(__dirname, '../db/product.json'), 'utf-8');
let productosLista = JSON.parse(jsonProducts); 

const nuevoId = () => {
    let ultimo = 0;
    products.forEach(product => {
        if (product.id > ultimo) {
            ultimo = product.id;
        }
    });
    return ultimo + 1;
}

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
    },

    store: (req, res) => {
        let product = {
            id: nuevoId(),
            ...req.body,
             image: req.file.filename || 'default-image.png',
        }
        products.push(product);

        let jsonDeProductos = JSON.stringify(products, null, 4);
        fs.writeFileSync(path.resolve(__dirname, '../db/products.json'), jsonDeProductos);

        res.redirect('/');


    }

}    

module.exports = productController; 