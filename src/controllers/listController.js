const path = require('path');
const fs = require('fs');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const db = require ('../database/models');

const Products = db.Products;
const Users = db.Users;

let listController = {
    list: (req,res) => {
        res.render("./list/list")
    },
    productList: (req,res) => {
        Products.findAll({
            include: [{association: "category"}]
        })
            .then(function (resultados) {
                res.render("./list/productList", {products: resultados})
            })
            .catch(function () {
                console.log("Promise Rejected");
            })
    },
    userList: (req,res) => {
        Users.findAll()
            .then(function (resultados) {
                res.render("./list/usersList", {user: resultados})
            })
            .catch(function () {
                console.log("Promise Rejected");
            })
    },
    delete: (req,res) =>{
        Users.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect('/listados/listadousuarios/')
    },
    userProfile: (req,res) => {
        Users.findByPk(req.params.id)
        .then(function (resultados) {
            res.render("./list/profile_admin", {user: resultados})
        })
        .catch(function () {
            console.log("Promise Rejected");
        })
        
    }

}

module.exports = listController;
