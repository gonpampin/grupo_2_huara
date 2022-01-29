const path = require('path');
const db = require ('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");


const Products = db.Products;
const Users = db.Users;
const ProductsCategories = db.ProductsCategories;

let apiController = {
    allUsers: (req, res) => {
        Users.findAll(
            {limit:5},
            {offset:5},
            
            {include: { all: true }})
        .then(users => {
            return res.status(200)
            .header('Access-Control-Allow-Origin', '*')
            .json({
                count: users.length,
                users: users.map(element =>{
                    return {
                        id: element.id,
                        name: element.first_name,
                        last_name: element.last_name,
                        email: element.email,
                        detalle: `http://localhost:3001/api/users/${element.id}`,
                       
                    }
                }),
                
            
            })
        })
        .catch((e)=>{
         
            return res.send(e)
        })
    },

    singleUser: (req, res) => {
        Users.findByPk(req.params.id)
       
        .then(user => {
            return res.status(200)
            .header('Access-Control-Allow-Origin', '*')
            .json({
                id: user.id,
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                image: `http://localhost:3001/images/avatars/${user.image}`
		})
            })
        
        .catch(()=>{
            return res.render('./list/error404')
        })

    },
    allProducts: (req, res) => {
        let products = Products.findAll({include: { all: true }})
        let category = ProductsCategories.findAll(
{
                include: { all: true }
            }
            
            
            )


        Promise.all([products, category])
        .then(function ([resultadoProducts, resultadoCategory]) {
            return res.status(200)
            .header('Access-Control-Allow-Origin', '*')
            .json({
                totalProducts: resultadoProducts.length,
                countByCategory:resultadoCategory.map(element => {
                    return {
                        name:element.category,
                        count: element.products.length
                            }
                }),
                products: resultadoProducts.map(element =>{
                        return {
                            id: element.id,
                            name: element.name,
                            detalle: `http://localhost:3001/api/products/${element.id}`,
                            image: `http://localhost:3001/images/products/${element.image}`,
                            price: element.price,
                            stock: element.stock,
                            category: element.category.category
                        }
                    }),

            })
        })
        .catch(()=>{
            return res.render('./list/error404')
        })
    },

    singleProduct: (req, res) => {
        Products.findByPk(req.params.id, {include: {all:true}})
        
        
        .then(product => {
            return res.status(200)
            .header('Access-Control-Allow-Origin', '*')
            .json({
                id: product.id,
                name: product.name,
                description: product.description,
                image: "http://localhost:3001/images/products/" + product.image,
                price: product.price,
                stock: product.stock,
                category: product.category.category
                  
            })
        })
        
        .catch((e)=>{
            return res.send(e)
        })
        
    }

}

module.exports = apiController;

