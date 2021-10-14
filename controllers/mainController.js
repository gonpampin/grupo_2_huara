let productosLista = [
    {
        id: 1,
        name: 'TABLETA FRAMBUESAS',
        description: 'Chocolate semi amargo con frambuesas',
        image: "frambuesa.jpg"
    },
    {
        id: 2,
        name: 'MARROC',
        description: 'Chocolate con leche y chocolate blanco con pasta de maní',
        image: "marroc.jpg"
    },
    {
        id: 3,
        name: 'DULCE DE LECHE CON NUEZ',
        description: 'Pasta de dulce de leche y nueces, entre una capa de chocolate con leche y una capa de chocolate blanco',
        image: "nuez-ddl-blanco.jpg"
    },
    {
        id: 4,
        name: 'TABLETA ALMENDRA',
        description: 'Chocolate amargo 70% cacao con naranja, jengibre y almendras',
        image: "almendra.jpg"
    },
    {
        id: 5,
        name: 'PISTACHO',
        description: 'Crema de chocolate blanco con pistachos, entre dos capas de chocolate semi amargo',
        image: "pistacho.jpg"
    },
    {
        id: 6,
        name: 'AVELLANAS',
        description: 'Chocolate amargo con crema de licor de naranja y avellanas tostadas',
        image: "avellanas2.jpg"
    },
    {
        id: 7,
        name: 'BORRACHITO',
        description: 'Chocolate semi amargo con crema de ciruelas al Malbec con dulce de leche',
        image: "borrachito.jpg"
    },
    {
        id: 8,
        name: 'TABLETA FRAMBUESAS CHOCO BLANCO',
        description: 'Chocolate blanco con frambuesas y nibs de cacao',
        image: "frambuesa-blanco.jpg"
    },
    {
        id: 9,
        name: 'FRUTOS ROJOS',
        description: 'Crema de chocolate semi amargo y frutos rojos, entre una capa de chocolate amargo y una de chocolate blanco',
        image: "frutos-rojos.jpg"
    },
    {
        id: 10,
        name: 'TRUFA NEGRA',
        description: 'Chocolate con leche y café, bañada en chocolate semi amargo',
        image: "trufa-10.jpg"
    },
    {
        id: 11,
        name: 'TRUFA BLANCA',
        description: 'Chocolate blanco y maracuyá',
        image: "trufaa-6.jpg"
    }
]


let controller = {
    home: (req, res) => {
        res.render('home');
    },

    product:(req, res) => {
        res.render('product', {productosLista});
    },

    login:(req, res) => {
        res.render('login');
    },

    register:(req, res) => {
        res.render('register');
    },

    productCart:(req, res) => {
        res.render('productCart');
    },

    formCreate:(req, res) => {
        res.render('formCreate');
    },

    formEdit:(req, res) => {
        res.render('formEdit');
    },

    /*create:(req, res) => {
        let usuario= {
            name: req.body.name,
            lastname: req.body.lastname,
            email: req.body.email,
            contrasenia: req.body.contrasenia,
            birthday: req.body.birthday,
        }
    }*/
    
}    
     
    


module.exports = controller; 