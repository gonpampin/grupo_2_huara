const express = require('express');
const app = express();

const path = require('path');

const router = require('./routes/mainRoutes');


app.use(express.static(path.resolve(__dirname, '../public')));



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', router);

app.listen(3000, () => {
    console.log('Servidor levantado en el puerto 3000')
})

