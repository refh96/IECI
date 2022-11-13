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
    número:{
        type: Number,
        required: true
    },
    correo: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 50
    },
    /*lugar: {
        type:Schema.ObjectId,
        ref: 'lugar'
    },
    category: {
        type:Schema.ObjectId,
        ref: 'category'
    },*/
    status: {
        type:Schema.ObjectId,
        ref: 'status'
    }
});

module.exports = mongoose.model('arrendatario', ArrendatarioSchema);