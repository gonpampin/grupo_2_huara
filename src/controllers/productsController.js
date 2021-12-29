const path = require('path');
const fs = require('fs');
const db = require('../database/models');
const { validationResult } = require('express-validator');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const Product = require('../database/models/Product');
const ProductsCategory = require('../database/models/ProductsCategory');


const Products = db.Products;
const ProductsCategories = db.ProductsCategories;



let productController = {

    products: (req, res) => {
        Products.findAll({
            include:[{association:"category"}]
        })
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
        ProductsCategories.findAll()
        .then(function(resultados){
             res.render('./products/formCreate', {category: resultados});
        })
        .catch(function () {
            console.log("Promise Rejected en formCreate");
        })
        
    },


    store: (req, res) => {
        let resultValidation = validationResult(req)

        if (resultValidation.errors.length > 0) {
            
            ProductsCategories.findAll()
                .then(function(resultados){
                    console.log(resultValidation)
                    return res.render('./products/formCreate',{
                        errors: resultValidation.mapped(),
                        oldProductData: req.body,
                        category: resultados
                    })
                }).catch(error => {
                return res.send(error)
            })
        } else {
         Products.create({
            name: req.body.name,
            description: req.body.description,
            image: req.file.filename || 'default-image.jpeg',
            product_category_id: req.body.category,
            price: req.body.price,
            stock: req.body.stock
        })
        res.redirect('/productos');
        }
    },

   
    detail: (req, res) => {
        Products.findByPk(req.params.id, 

            {include: {all: true}}
                 
        )
            .then(function (productoDetalle) {
                res.render('./products/productDetail', 
                {
                    products: productoDetalle
                });
            })
    },


    formEdit: function (req, res) {
        /*Products.findByPk(req.params.id)
            .then(function (productoEditar) {
                res.render('products/formEdit', {productEdit: productoEditar});
            })*/

        let productsPromise = Products.findByPk(req.params.id)
        /*.then(function (productoEditar) {
            res.render('products/formEdit', {productEdit: productoEditar});
        })*/

        let categoriesPromise = ProductsCategories.findAll()
        /*.then(function(resultados){
             res.render('./products/formCreate', {category: resultados});
            })*/

        Promise.all([productsPromise, categoriesPromise])
        .then(function([resultadosProducts, resultadosCategories]){
            res.render('./products/formEdit',
            {
                productEdit: resultadosProducts,
                category: resultadosCategories
            });
        })
        
    },

    editProduct: (req, res) => {
        Products.update({
            name: req.body.name,
            description: req.body.description,
            image: req.file.filename,
            product_category_id: req.body.category,
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
            [Op.or]: [
              {
                name: {
                  [Op.like]: `%${req.body.titulo}%`
                }
              },
              {
                description: {
                  [Op.like]: `%${req.body.titulo}%`
                }
              }
                         
            ]
          }
        ,

        include:[
            {association:"category"}
        ]

    })
    .then(function (buscarProducto) {
        res.render('./products/product', {
            products: buscarProducto

        })
            
    })
    }
}

module.exports = productController;