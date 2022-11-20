const express = require('express');
const api = express.Router();
const arriendoController = require('../controllers/arriendoController');

api.post('/arriendo', arriendoController.createArriendo);
api.get('/arriendos', arriendoController.getArriendos);
api.get('/arriendo/search/:id', arriendoController.getArriendo);
api.put('/arriendo/update/:id', arriendoController.updateArriendo);
api.delete('/arriendo/delete/:id', arriendoController.deleteArriendo);

module.exports = api;