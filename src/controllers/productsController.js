const path = require('path');
const fs = require('fs');
const db = require ('../database/models');

const Products = db.Products;


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

    formEdit: function (req, res) {
        let productoEditar = productosLista.find(product => {
            return product.id == req.params.id;
        })
        res.render('products/formEdit', { productEdit: productoEditar });
    }, 

    detail: (req, res) => {
        let id = req.params.id;
        let productoDetalle = productosLista.find(product => {
            return product.id == id;
        })

        res.render('products/productDetail', { products: productoDetalle });
    },

    store: (req, res) => {
        /*let product = {
            //corregir los campos del name del input para que coinicidan con los nombres de las propiedades del json
            id: nuevoId(),
            ...req.body,
            image: req.file.filename || 'default-image.png'
        }

        productosLista.push(product);

        let jsonDeProductos = JSON.stringify(productosLista, null, 4);
        fs.writeFileSync(path.resolve(__dirname, '../db/product.json'), jsonDeProductos);

        res.redirect('/');*/

        Products.create({
            name: req.body.name,
			description: req.body.lastname,
            image: req.file.filename,
			price: req.body.price,
			stock: req.body.stock
		
        })
        .catch(error =>{
            res.send(error)
        })

        res.redirect('/');




    },
    editProduct: (req,res) => {
        productosLista.forEach(product => {
            if (product.id == req.params.id) {
                product.name = req.body.name;
                product.description = req.body.description;
                product.category = req.body.category;
                product.price = req.body.price;
                product.image = req.body.image;
            
        }

        })
        let jsonDeProductos = JSON.stringify(productosLista, null, 4);
        fs.writeFileSync(path.resolve(__dirname, '../db/product.json'), jsonDeProductos);

        res.redirect('/productos')

        },
        delete: (req, res) => {

            let productosRestantes = productosLista.filter(product => {
                return product.id != req.params.id;
            })
    
            let jsonDeProductos = JSON.stringify(productosRestantes, null, 4);
            fs.writeFileSync(path.resolve(__dirname, '../db/product.json'), jsonDeProductos);
    
            res.redirect('/productos');
        }
}    

module.exports = productController; 