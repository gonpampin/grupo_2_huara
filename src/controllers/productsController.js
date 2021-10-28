const path = require('path');
const fs = require('fs');

let jsonProducts = fs.readFileSync(path.resolve(__dirname, '../db/product.json'), 'utf-8');
let productosLista = JSON.parse(jsonProducts); 

const nuevoId = () => {
    let ultimo = 0;
    productosLista.forEach(product => {
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
            image: req.file.filename || 'default-image.png'
        }
        productosLista.push(product);

        let jsonDeProductos = JSON.stringify(productosLista, null, 4);
        fs.writeFileSync(path.resolve(__dirname, '../db/product.json'), jsonDeProductos);

        res.redirect('/');


    },

    editProduct: (req,res) => {
        productosLista.forEach(product => {
            if (product.id == req.params.id) {
                product.productName = req.body.productName;
                product.productDescription = req.body.productDescription;
                product.productCategory = req.body.productCategory;
                product.productPrice = req.body.productPrice;
                product.image = 'default-image.png';
            
    }

        })
    let jsonDeProductos = JSON.stringify(productosLista, null, 4);
        fs.writeFileSync(path.resolve(__dirname, '../db/product.json'), jsonDeProductos);
        res.send('hola');
        }
}    

module.exports = productController; 