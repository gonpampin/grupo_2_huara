//Autenticar que no hay nadie en sesión y entonces me manda al login.
// Si no hay nadie logueado, no deberia poder acceder a la vista de profile por la url

function authMiddleware(req, res, next) {
	if (!req.session.userLogged) {
		return res.redirect('/usuarios/login');
	}
	next();
}

module.exports = authMiddleware;