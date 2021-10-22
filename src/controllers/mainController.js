
let controller = {
    home: (req, res) => {
        res.render('home');
    },
    productCart:(req, res) => {
        res.render('products/productCart');
    },
}    
     
    


module.exports = controller; 