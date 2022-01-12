const db = require('../database/models');
//const Product = require('../database/models/Product');
//const Products = db.Products;



let cartController = {
    productCart:(req, res) => {
        res.render('products/productCart');
        
        console.log(usserLogged.localStorage.getItem('cart'))
        ;
    },

   
}    
     
    


module.exports = cartController; 