const express = require('express');
const api = express.Router();
const arrendatarioController = require('../controllers/arrendatarioController');

api.post('/arrendatario', arrendatarioController.createArrendatario);
api.get('/arrendatarios', arrendatarioController.getArrendatarios);
api.get('/arrendatario/search/:id', arrendatarioController.getArrendatario);
api.put('/arrendatario/update/:id', arrendatarioController.updateArrendatario);
api.delete('/arrendatario/delete/:id', arrendatarioController.deleteArrendatario);

module.exports = api;