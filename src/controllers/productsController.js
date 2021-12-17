const path = require('path');
const fs = require('fs');
const db = require('../database/models');

const Products = db.Products;


//let jsonProducts = fs.readFileSync(path.resolve(__dirname, '../db/product.json'), 'utf-8');
//let productosLista = JSON.parse(jsonProducts); 

/*const nuevoId = () => {
    let ultimo = 0;
    productosLista.forEach(product => {
        if (product.id > ultimo) {
            ultimo = product.id;
        }
    });
    return ultimo + 1;
}*/

let productController = {

    products: (req, res) => {
        Products.findAll()
            .then(function (resultados) {
                res.render("./products/product", {
                    products: resultados
                })
            })
            .catch(function () {
                console.log("Promise Rejected");
            })
    },


    formCreate: (req, res) => {
        res.render('./products/formCreate');
    },


    store: (req, res) => {
        Products.create({
            name: req.body.name,
            description: req.body.description,
            image: req.file.filename,
            price: req.body.price,
            stock: req.body.stock
        })
        res.redirect('/productos');
    },

    // hay dos img rotas en la pagina de productos que no pude arreglar
    detail: (req, res) => {
        Products.findByPk(req.params.id)
            .then(function (productoDetalle) {
                console.log(productoDetalle)
                res.render('./products/productDetail', {
                    products: productoDetalle
                });
            })
    },


    formEdit: function (req, res) {
        Products.findByPk(req.params.id)
            .then(function (productoEditar) {
                res.render('products/formEdit', {
                    productEdit: productoEditar
                });
            })
    },
//falta que venga en el form la imagen ya cargada o poner una validacion para que 
//no se pueda modificar sin cargarla.
    editProduct: (req, res) => {
        Products.update({
            name: req.body.name,
            description: req.body.description,
            image: req.body.image,
            price: req.body.price,
            stock: req.body.stock
        }, {
            where: {
                id: req.params.id
            }
        })
        res.redirect('/productos')
    },


    delete: (req, res) => {
        Products.destroy({
            where: {
                id: req.params.id
            }
        });
        res.redirect('/productos')
    },

    listado: (req,res) => {
        res.send("hola mundo perdido")
    }
   
}

module.exports = productController;