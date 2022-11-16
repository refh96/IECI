const express = require('express');
const api = express.Router();
const arriendoController = require('../controllers/arriendoController');

api.post('/arriendo/:id/:id_2', arriendoController.createArriendo);
api.get('/arriendos', arriendoController.getArriendos);
api.put('/arriendo/arrendatario/:id/:id_2', arriendoController.addArrendatario)
api.get('/arriendo/search/:id', arriendoController.getArriendo);
api.put('/arriendo/update/:id', arriendoController.updateArriendo);
api.delete('/arriendo/delete/:id', arriendoController.deleteArriendo);

module.exports = api;