const fs = require('fs');
const path = require('path');

const rutaLog = path.join(__dirname, '../../logs/log.txt');

const accessLogger = (req, res, next) => {
    const fecha = new Date().toLocaleString();
    const registro = `${fecha} - ${req.method} ${req.originalUrl}\n`;

    fs.appendFile(rutaLog, registro, (error) => {
        if (error) {
            console.error('Error al registrar acceso:', error);
        }
    });

    next();
};

module.exports = accessLogger;