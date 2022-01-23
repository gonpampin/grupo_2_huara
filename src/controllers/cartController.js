const db = require('../database/models');
const Products = db.Products;



let cartController = {
    productCart:(req, res) => {
        Products
			.findAll({
				where: {
					id: req.session.cart
				}
			})
			.then(products => {
				return res.render('./products/productCart', { products });
			});
	},

    addToCart: (req, res) => {
		let cart = req.session.cart;

		if (!cart.includes(req.body.productCart)) {
			req.session.cart.push(req.body.productCart);
		}

		//console.log('======');
		console.log("esto es req.session.cart",req.session.cart);
		//console.log('======');
		return res.redirect('/productos')
	}

   
}    
     
    


module.exports = cartController; 