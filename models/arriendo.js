const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ArriendoSchema = new Schema({
    fecha:{
        type: String,
        required: true
    },
    hora_inicio:{
        type: String,
        required: true
    },
    hora_fin:{
        type: String,
        required: true
    },
    arrendatario:{
        type: Schema.ObjectId,
        ref: 'arrendatario'
    },
    espacios:{
        type: Schema.ObjectId,
        ref: 'espacios'
    },
});

module.exports = mongoose.model('arriendo', ArriendoSchema);