const mostrarInicio = (req, res) => {
    res.render('home');
};

const mostrarEstado = (req, res) => {
    res.json({
        status: 'OK',
        message: 'Servidor funcionando correctamente'
    });
};

module.exports = {
    mostrarInicio,
    mostrarEstado
};