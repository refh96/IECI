const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        minLenght: 1,
        maxLenght: 100
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true,
        minLenght: 1,
        maxLenght: 250
    },
    category: [{
        type: Schema.Types.ObjectId,
        ref: 'category'
    }],
    status: {
        type: Schema.ObjectId,
        ref: 'status',
    }

})

module.exports = mongoose.model('product', productSchema);