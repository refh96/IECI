const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const statusSchema = new Schema({
    name: {
        type: String,
        role: {type: String, default: 'Permitido'},
        required: true,
        enum: [
            'Permitido',
            'Bloqueado'
        ]
    }
})

module.exports = mongoose.model('status', statusSchema);