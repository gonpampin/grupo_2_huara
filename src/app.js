const express = require('express');
const app = express();

const path = require('path');

const methodOverride = require ('method-override');
app.use(methodOverride('_method'));

const mainRouter = require('./routes/mainRoutes');
const productsRouter = require('./routes/productsRoutes');
const usersRouter = require('./routes/usersRoutes');


app.use(express.static(path.resolve(__dirname, '../public')));



app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', mainRouter);
app.use('/productos', productsRouter);
app.use('/usuarios', usersRouter);

app.listen(3000, () => {
    console.log('Servidor levantado en el puerto 3000')
})

