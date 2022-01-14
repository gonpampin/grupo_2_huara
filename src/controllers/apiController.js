const path = require('path');
const db = require ('../database/models');


const Products = db.Products;
const Users = db.Users;

let apiController = {
    allUsers: (req, res) => {
        Users.findAll()
        .then(users => {
            return res.status(200)
            .header('Access-Control-Allow-Origin', '*')
            .json({
                status: 200,
                count: users.length,
                users: users
            
            })
        })
        .catch(()=>{
         
            return res.render('./list/error404')
        })
    },

    singleUser: (req, res) => {
        Users.findByPk(req.params.id)
       
        .then(user => {
            return res.status(200)
            .header('Access-Control-Allow-Origin', '*')
            .json({
                status: 200,
                id: user.id,
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                image: user.image,
                user_category: user.user_category_id == 1 ? 'Admin' : 'Cliente'
		})
            })
        
        .catch(()=>{
            return res.render('./list/error404')
        })

    },
    allProducts: (req, res) => {
        Products.findAll()
        .then(products => {
            return res.status(200)
            .header('Access-Control-Allow-Origin', '*')
            .json({
                count: products.length,
                products: products
            })
        })
        .catch(()=>{
            return res.render('./list/error404')
        })
    },

    singleProduct: (req, res) => {
        Products.findByPk(req.params.id)
        .then(product => {
            return res.status(200)
            .header('Access-Control-Allow-Origin', '*')
            .json({
                id: product.id,
                name: product.name,
                description: product.description,
                image: product.image,
                price: product.price,
                stock: product.stock
            })
        })
        .catch(()=>{
            return res.render('./list/error404')
        })
        
    }

}

module.exports = apiController;