const { obtenerProductos } = require('../services/productos.service');

const listarProductos = (req, res) => {
    const productos = obtenerProductos();

    res.render('productos', {
        productos
    });
};

module.exports = {
    listarProductos
};