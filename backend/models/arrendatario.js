const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ArrendatarioSchema = new Schema({
    nombre:{
        type: String,
        required: true,
        minLength: 1,
        maxLength: 50
    },
    apellido:{
        type: String,
        required: true,
        minLength: 1,
        maxLength: 50
    },
    numero:{
        type: Number,
        required: true
    },
    correo: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 50
    },
    status:{
        type: String,
        required: true,
        enum: [
            'Permitido',
            'Bloqueado'
        ]
    }
});

module.exports = mongoose.model('arrendatario', ArrendatarioSchema);