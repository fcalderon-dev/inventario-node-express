const mostrarInicio = (req, res) => {
    res.render('home');
};

const mostrarEstado = (req, res) => {
    res.json({
        status: 'OK',
        message: 'Servidor funcionando correctamente'
    });
};

const mostrarAcerca = (req, res) => {
    res.render('acerca');
};

module.exports = {
    mostrarInicio,
    mostrarEstado,
    mostrarAcerca
};