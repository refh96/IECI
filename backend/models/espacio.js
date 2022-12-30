const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const EspacioSchema = new Schema({
    nombre:{
        type:String,
        require:true
    },
    aforo:{
        type:Number,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    category:{
        type:Schema.ObjectId,
        ref:'category'
    },
    tiempoMaximoDeArriendo:{
        type:Number,
        require:true
    },
    status:{
        type: String,
        required: true,
        enum: [
            'Disponible',
            'En Mantenimiento'
        ]
    }
});

module.exports =  mongoose.model('espacio',EspacioSchema);
