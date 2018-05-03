const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
const productsSchema = new Schema({

    title: { type: String , unique: true},
    discription: { type: String },
    price: { type: Number },
    category: { type: String },
    stock: { type: Number },
    quantity: { type: Number },
    imageurl: { type: String },

});

productsSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Product', productsSchema);