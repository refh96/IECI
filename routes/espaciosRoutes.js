const express = require('express');
const api = express.Router();
const EspaciosController = require('../controllers/espaciosController');

api.post('/espacios', EspaciosController.createEspacios);
api.get('/espacios', EspaciosController.getEspacios);
api.get('/espacios/search/:id', EspaciosController.getSpecificEspacios);
api.put('/espacios/update/:id', EspaciosController.updateEspacios);
api.delete('/espacios/delete/:id', EspaciosController.deleteEspacios);

module.exports = api;