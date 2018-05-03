const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
const cartSchema = new Schema({

    title: { type: String , unique: true},
    price: { type: Number },
    category: { type: String },
    discription: { type: String },
    stock: { type: Number },
    quantity: { type: Number },
    imageurl: { type: String },

});

cartSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Cart', cartSchema);