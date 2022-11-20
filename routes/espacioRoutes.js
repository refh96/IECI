const express = require('express');
const api = express.Router();
const espacioController = require('../controllers/espacioController');

api.post('/espacio', espacioController.createEspacio);
api.get('/espacios', espacioController.getEspacio);
api.get('/espacio/search/:id', espacioController.getSpecificEspacio);
api.put('/espacio/update/:id', espacioController.updateEspacio);
api.delete('/espacio/delete/:id', espacioController.deleteEspacio);

module.exports = api;