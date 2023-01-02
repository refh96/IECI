const express = require('express');
const api = express.Router();
const arrendatarioController = require('../controllers/arrendatarioController');
const checkRUT = require('../middleware/checkRUT')

api.post('/arrendatario', arrendatarioController.createArrendatario);
api.get('/arrendatarios', arrendatarioController.getArrendatarios);
api.put('/arrendatario/status/:id', arrendatarioController.changeStatus);
api.get('/arrendatario/search/:id', arrendatarioController.getArrendatario);
api.put('/arrendatario/update/:id', arrendatarioController.updateArrendatario);
api.delete('/arrendatario/delete/:id', arrendatarioController.deleteArrendatario);
api.post('/login', checkRUT);

module.exports = api;