const express = require('express');
const router = express.Router();

const {
    mostrarInicio,
    mostrarEstado,
    mostrarAcerca
} = require('../controllers/index.controller');

router.get('/', mostrarInicio);
router.get('/status', mostrarEstado);
router.get('/acerca', mostrarAcerca);

module.exports = router;