//

function authAdminMiddleware(req, res, next) {
	if (!req.session.userLogged || req.session.userLogged.user_category_id === null) {
		return res.redirect('/');
	}
	next();
}

module.exports = authAdminMiddleware