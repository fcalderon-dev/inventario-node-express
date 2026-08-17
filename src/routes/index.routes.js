const express = require('express');
const router = express.Router();

const {
    mostrarInicio,
    mostrarEstado
} = require('../controllers/index.controller');

router.get('/', mostrarInicio);
router.get('/status', mostrarEstado);

module.exports = router;