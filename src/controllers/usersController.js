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

       Users.findOne({
		where:{
			email: req.body.email
		}
	   })
	   .then((resultado)=>{
		   

		console.log(req.body.email === resultado.email)
		if (resultado.email === req.body.email) {
			console.log(req.body.email === resultado.email)
			return res.render('../views/users/register', {
				errors: {
					email: {
						msg: 'Este email ya está registrado'
					}
				},
				oldData: req.body
			});
		}
	   })


		Users.create({
			first_name: req.body.name,
			last_name: req.body.lastname,
			password: bcryptjs.hashSync(req.body.contrasenia,10),
			email: req.body.email,
			image: req.file.filename
		})
		
		return res.redirect('/usuarios/login');


	},
    loginProcess: (req, res) => {
		
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
						res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 100 })
					}
	
					return res.redirect('/usuarios/perfil/'+resultado.id);
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
		Users.findByPk(req.params.id)
		.then(function (userEdit) {
			res.render('../views/users/userEdit', {userEdit: userEdit} );
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
	res.redirect('/usuarios/perfil/'+ req.params.id)
},


    logout: (req, res) => {
		res.clearCookie('userEmail');
		req.session.destroy();
		return res.redirect('/');
	}
}


module.exports = userController; 