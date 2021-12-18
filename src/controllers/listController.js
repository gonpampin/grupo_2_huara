const path = require('path');
const fs = require('fs');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const db = require ('../database/models');

const Products = db.Products;

let listController = {
    list: (req,res) => {
        res.render("./list/list")
    },
    productList: (req,res) => {
        Products.findAll()
            .then(function (resultados) {
                res.render("./list/productList", {products: resultados})
            })
            .catch(function () {
                console.log("Promise Rejected");
            })
    }

}

module.exports = listController;
