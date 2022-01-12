const db = require('../database/models');
const Product = require('../database/models/Product');
const Products = db.Products;

let controller = {
    home: (req, res) => {

        Products.findAll({
            include: [{
                association: "category"
            }]
        })
        .then(function (resultados) {
            res.render("home", {
                products: resultados
            })
        })
        .catch(function () {
            console.log("Promise Rejected");
        })
    }
}    
     
    


module.exports = controller; 