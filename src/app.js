const express = require('express');
const indexRoutes = require('./routes/index.routes');
const productosRoutes = require('./routes/productos.routes');
const { engine } = require('express-handlebars');
const accessLogger = require('./middlewares/accessLogger');
const app = express();


app.engine('hbs', engine({
    extname: '.hbs',
    defaultLayout: false
}));

app.set('view engine', 'hbs');
app.set('views', './views');
const PORT = 3000;

app.use(accessLogger);

// Permite servir archivos estáticos desde la carpeta public
app.use(express.static('public'));

app.use('/', indexRoutes);
app.use('/productos', productosRoutes);

app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});