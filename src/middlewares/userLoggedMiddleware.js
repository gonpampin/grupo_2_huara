// es un middleware de aplicación ya que el header aparece en todas las vistas
const db = require ('../database/models');

const Users = db.Users;

function userLoggedMiddleware(req, res, next) {
	res.locals.isLogged = false;

	let emailInCookie = req.cookies.userEmail;


	Users.findOne({
		where: {
			email: emailInCookie
		}
	}).then(userFromCookie =>{
		if (userFromCookie) {
			req.session.userLogged = userFromCookie;
		}
	})
	.catch(noLogged =>{
		console.log("No hay nadie logueado")
	})

	

	if (req.session.userLogged) {
		console.log("Hay alguien logueado ")
		res.locals.isLogged = true;
		res.locals.userLogged = req.session.userLogged;
	}
	next();
}

module.exports = userLoggedMiddleware;