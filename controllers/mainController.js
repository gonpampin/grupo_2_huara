let productosLista = [
    {
        id: 1,
        name: 'TABLETA FRAMBUESAS',
        description: 'Chocolate semi amargo con frambuesas',
        image: "images\frambuesa.jpg"
    },
    {
        id: 2,
        name: 'MARROC',
        description: 'Chocolate con leche y chocolate blanco con pasta de maní',
        image: "images\marroc.jpg"
    },
    {
        id: 3,
        name: 'DULCE DE LECHE CON NUEZ',
        description: 'Pasta de dulce de leche y nueces, entre una capa de chocolate con leche y una capa de chocolate blanco',
        image: "images\nuez-ddl-blanco.jpg"
    },
    {
        id: 4,
        name: 'TABLETA ALMENDRA',
        description: 'Chocolate amargo 70% cacao con naranja, jengibre y almendras',
        image: "images\almendra.jpg"
    },
    {
        id: 5,
        name: 'PISTACHO',
        description: 'Crema de chocolate blanco con pistachos, entre dos capas de chocolate semi amargo',
        image: "images\pistacho.jpg"
    },
    {
        id: 6,
        name: 'AVELLANAS',
        description: 'Chocolate amargo con crema de licor de naranja y avellanas tostadas',
        image: "images\avellanas2.jpg"
    },
    {
        id: 7,
        name: 'BORRACHITO',
        description: 'Chocolate semi amargo con crema de ciruelas al Malbec con dulce de leche',
        image: "images\borrachito.jpg"
    },
    {
        id: 8,
        name: 'TABLETA FRAMBUESAS CHOCO BLANCO',
        description: 'Chocolate blanco con frambuesas y nibs de cacao',
        image: "images\frambuesa-blanco.jpg"
    },
    {
        id: 9,
        name: 'FRUTOS ROJOS',
        description: 'Crema de chocolate semi amargo y frutos rojos, entre una capa de chocolate amargo y una de chocolate blanco',
        image: "images\frutos-rojos.jpg"
    },
    {
        id: 10,
        name: 'TRUFA NEGRA',
        description: 'Chocolate con leche y café, bañada en chocolate semi amargo',
        image: "images\trufas\trufa-10.jpg"
    },
    {
        id: 11,
        name: 'TRUFA BLANCA',
        description: 'Chocolate blanco y maracuyá',
        image: "images\trufas\trufaa-6.jpg"
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
    }

}

module.exports = controller; 