const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const EspaciosSchema = new Schema({
    nombre:{
        type:String,
        require:true
    },
    cantidad:{
        type:Number,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    status:{
        type: Schema.ObjectId,
        ref:'status'
    }


});
module.exports =  mongoose.model('espacios',EspaciosSchema);