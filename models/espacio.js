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
    status:{
        type: Schema.ObjectId,
        ref:'status'
    }
});

module.exports =  mongoose.model('espacio',EspacioSchema);
