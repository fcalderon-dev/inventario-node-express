const fs = require('fs');
const path = require('path');

const rutaProductos = path.join(__dirname, '../data/productos.json');

const obtenerProductos = () => {
    const datos = fs.readFileSync(rutaProductos, 'utf-8');
    return JSON.parse(datos);
};

module.exports = {
    obtenerProductos
};