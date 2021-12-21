const path = require('path');
const fs = require('fs');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const Product = require('../database/models/Product');


const Products = db.Products;




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
            include: [
                {association: 'categorias_producto'},
                {association: 'productos'}                
            ]
        },
            {
            name: req.body.name,
            description: req.body.description,
            image: req.file.filename,
            price: req.body.price,
            stock: req.body.stock,
            product_category_id: Products.categorias_producto.product_category_id
        })
        res.redirect('/productos');
    },

   
    detail: (req, res) => {
        Products.findByPk(req.params.id)
            .then(function (productoDetalle) {
                
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

    editProduct: (req, res) => {
        Products.update({
            name: req.body.name,
            description: req.body.description,
            image: req.file.filename,
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

    
    search: (req,res) => {

    Products.findAll({
        where: {
            name: {
                [Op.like]: `%${req.body.titulo}%`
            }
        }

    })
    .then(function (buscarProducto) {
        res.render('./products/product', {
            products: buscarProducto

        })
    
        
    })
    }
}

module.exports = productController;