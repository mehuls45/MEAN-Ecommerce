const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
const wishListSchema = new Schema({

    title: { type: String , unique: true},
    price: { type: Number },
    category: { type: String },
    discription: { type: String },
    stock: { type: Number },
    quantity: { type: Number },
    imageurl: { type: String },

});

wishListSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Wish', wishListSchema);