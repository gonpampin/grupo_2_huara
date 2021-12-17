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
			password: bcryptjs.hashSync(req.body.contrasenia,10),
			email: req.body.email,
			image: req.file.filename
		})
		/*.catch(error => {
			res.send(error)
		})*/
		
		return res.redirect('/usuarios/login');


	},
    loginProcess: (req, res) => {
		console.log('pase por login process')
		console.log(req.body.contrasenia)
		Users.findOne({
			where:{
				email: req.body.email
			}
		})
		.then((resultado)=>{
			if(resultado) {
				let isOkThePassword = bcryptjs.compareSync(req.body.contrasenia, resultado.password);
				
				if (isOkThePassword) {
					delete resultado.password;
					req.session.userLogged = resultado;
	
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
		})
		.catch(function () {
			console.log("Promise Rejected");
		})

	},


    profile: (req, res) => {
		return res.render('../views/users/profile', {
			user: req.session.userLogged
		});
	},

	formEdit:(req, res) =>{
		User.findByPk(req.params.id)
		.then(function (userEditar) {
			res.render('users/userEdit', {userEditar: userEditar} );
		})
},

editUser:(req, res) => {
	Users.update({
		first_name: req.body.name,
			last_name: req.body.lastname,
			password: bcryptjs.hashSync(req.body.contrasenia,10),
			email: req.body.email,
			image: req.body.image,
	},
	 {
		where: {
			id: req.params.id
		}
	})
	res.redirect('../views/users/profile')
},


    logout: (req, res) => {
		res.clearCookie('userEmail');
		req.session.destroy();
		return res.redirect('/');
	}
}


module.exports = userController; 