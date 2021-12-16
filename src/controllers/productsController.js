const path = require('path');
const fs = require('fs');
const db = require ('../database/models');

const Products = db.Products;


let jsonProducts = fs.readFileSync(path.resolve(__dirname, '../db/product.json'), 'utf-8');
let productosLista = JSON.parse(jsonProducts); 

const nuevoId = () => {
    let ultimo = 0;
    productosLista.forEach(product => {
        if (product.id > ultimo) {
            ultimo = product.id;
        }
    });
    return ultimo + 1;
}

let productController = { 

    products :(req, res) => {
    Products.findAll()
    .then(function(resultados){
        res.render("./products/product", {products:resultados})
    })
    .catch(function () {
        console.log("Promise Rejected");
    })
    

    },
    


    formCreate:(req, res) => {
        res.render('./products/formCreate');
    },

    formEdit: function (req, res) {
        Products.findByPk(req.params.id)
        .then(function(productoEditar){
            res.render('products/formEdit', { productEdit: productoEditar });
        })
    
      
    }, 

    detail: (req, res) => {
        Products.findByPk(req.params.id)
        .then(function(productoDetalle){
           res.render('./products/productDetail', { products: productoDetalle });
        })

        
    },

    store: (req, res) => {
        Products.create({
            name: req.body.name,
			description: req.body.description,
            image: req.file.filename,
			price: req.body.price,
			stock: req.body.stock
		
        })
       
        res.redirect('/');




    },
    editProduct: (req,res) => {
        Products.update({
            name: req.body.name,
			description: req.body.description,
            image: req.file.image,
			price: req.body.price,
			stock: req.body.stock
        },{
            where:{
                id: req.params.id
            }
        })

        res.redirect('./productos/' + req.params.id)

        },

        delete: (req, res) => {

            let productosRestantes = productosLista.filter(product => {
                return product.id != req.params.id;
            })
    
            let jsonDeProductos = JSON.stringify(productosRestantes, null, 4);
            fs.writeFileSync(path.resolve(__dirname, '../db/product.json'), jsonDeProductos);
    
            res.redirect('/productos');
        } 
        /*  delete: (req, res) => {

            db.Products.destroy({
                where: {
                     name : req.body.name
                     }
            });
            res.redirect('/productos')
        }*/
}    

module.exports = productController; 





