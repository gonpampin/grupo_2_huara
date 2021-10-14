const express = require('express');
const app = express();

const path = require('path');

const router = require('./routes/mainRoutes');

/* Config public */
app.use(express.static(path.resolve(__dirname, 'public')));


// view engine setup
/*app.set('views', path.resolve(__dirname, 'views'));*/
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', router);

app.listen(3000, () => {
    console.log('Servidor levantado en el puerto 3000')
})

/* POST
app.use(express.urlencoded({extended: false}));
app.use(express.json());

/* Routes 
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/home.ejs'));
})

app.get('/productos', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/product.html'));
})
app.get('/carrito', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/productCart.html'));
})
app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/login.html'));
})
app.get('/registro', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/register.html'));
})

app.post('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/home.html'));
})
app.post('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/home.html'));
})





app.listen(3000, () => console.log('Server corriendo en el puerto 3000'));

*/