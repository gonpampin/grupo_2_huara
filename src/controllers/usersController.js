const path = require('path');
const fs = require('fs');
const bcryptjs = require('bcryptjs');
const User = require('../models/user.js');
const { validationResult } = require('express-validator');


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
        let userToCreate = {
			...req.body,
			contrasenia: bcryptjs.hashSync(req.body.contrasenia, 10),
            recontrasenia: bcryptjs.hashSync(req.body.recontrasenia, 10),
			avatar: req.file.filename
		}

		let userCreated = User.create(userToCreate);

		return res.redirect('/usuarios/login');
	}
        
    } 



module.exports = userController; 