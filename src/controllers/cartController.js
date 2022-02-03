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

		res.cookie('cartCookie', req.session.cart, { maxAge: (1000 * 60) * 100 })

		//console.log('======');
		console.log("esto es req.session.cart",req.session.cart);
		//console.log('======');
		return res.redirect('/productos')
	},

	removeFromCart: (req, res) => {

		let cart = req.session.cart

		let carrito = cart.filter(function(carrito){
		return carrito != req.body.deleteProduct
		})

		req.session.cart = carrito;


		Products
		.findAll({
			where: {
				id: req.session.cart
			}
		})
		.then(products => {
			if(req.session.cart.length === 0){
				return res.redirect('/carrito');

		} else {

			return res.render('./products/productCart', { products });

		}
		});

	},

	terminarCompra: (req, res) => {
		req.session.cart = []
		return res.redirect('/carrito');
	}

   
}    
     
    


module.exports = cartController; 