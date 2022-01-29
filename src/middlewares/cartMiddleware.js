module.exports = (req, res, next) => {
	// Si no existe session.cart, lo inicializamos vacío
	if (!req.session.cart) {
		req.session.cart = [];
	}
	// Setear en locals la cantidad de productos
	res.locals.cart = true;
	res.locals.cart = req.session.cart
	next();
	console.log("esto es",res.locals.cart)
}