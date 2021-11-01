const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require ('method-override');

//config put y delete
app.use(methodOverride('_method'));

//config express
app.use(express.static(path.resolve(__dirname, '../public')));

//config req.body 
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

//config template
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

//config rutas
const mainRouter = require('./routes/mainRoutes');
const productsRouter = require('./routes/productsRoutes');
const usersRouter = require('./routes/usersRoutes');

app.use('/', mainRouter);
app.use('/productos', productsRouter);
app.use('/usuarios', usersRouter);


//servidor
app.listen(3000, () => {
    console.log('Servidor levantado en el puerto 3000')
})

