const path = require('path');
const fs = require('fs');
const bcryptjs = require('bcryptjs');
const User = require('../models/user.js');
const { validationResult } = require('express-validator');
const db = require ('../database/models');

const Users = db.Users;


let userController = {
 
    login:(req, res) => {
        res.render('./users/login');
    },

    register:(req, res) => {
        res.render('./users/register');
    },

    processRegister: (req,res) => {
        let resultValidation = validationResult(req)

        if (resultValidation.errors.length > 0) {
            return res.render('./users/register', {
                errors: resultValidation.mapped(), 
                oldData: req.body
             });
        }

        let userInDB = User.findByField('email', req.body.email);

		if (userInDB) {
			return res.render('../views/users/register', {
				errors: {
					email: {
						msg: 'Este email ya está registrado'
					}
				},
				oldData: req.body
			});
		}


		Users.create({
			first_name: req.body.name,
			last_name: req.body.lastname,
			avatar: req.file.filename,
			password: req.body.contrasenia,
			email: req.body.email,
		})
		/*.catch(error => {
			res.send(error)
		})*/

		
		
		return res.redirect('/usuarios/login');


	},
    loginProcess: (req, res) => {
		let userToLogin = User.findByField('email', req.body.email);
		
		if(userToLogin) {
			let isOkThePassword = bcryptjs.compareSync(req.body.contrasenia, userToLogin.contrasenia);
			if (isOkThePassword) {
				delete userToLogin.contrasenia;
				req.session.userLogged = userToLogin;

				if(req.body.recordarUsuario) {
					res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
				}

				return res.redirect('/usuarios/perfil');
			} 
			return res.render('../views/users/login', {
				errors: {
					email: {
						msg: 'Las credenciales son inválidas'
					}
				}
			});
		}

		return res.render('../views/users/login', {
			errors: {
				email: {
					msg: 'No se encuentra este email en nuestra base de datos'
				}
			}
		});
	},
    profile: (req, res) => {
		return res.render('../views/users/profile', {
			user: req.session.userLogged
		});
	},
    logout: (req, res) => {
		res.clearCookie('userEmail');
		req.session.destroy();
		return res.redirect('/');
	}
}


module.exports = userController; 