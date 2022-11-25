const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ArriendoSchema = new Schema({
    fecha_inicio:{
        type: Date,
        required: true
    },
    fecha_fin:{
        type: Date,
        required: true
    },
    arrendatario:{
        type: Schema.ObjectId,
        required: true,
        ref: 'arrendatario'
    },
    espacio:{
        type: Schema.ObjectId,
        required: true,
        ref: 'espacio'
    },
});

module.exports = mongoose.model('arriendo', ArriendoSchema);