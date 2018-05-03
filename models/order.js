const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
const orderSchema = new Schema({

    datePlaced: { type: Date },
    fname: { type: String },
    lname: { type: String },
    email: { type: String },
    address1: { type: String },
    address2: { type: String },
    country: { type: String },
    state: { type: String },
    zip: { type: String },
    cart: {
            type: Array
    },
    completed: { type: String }

});

orderSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Order', orderSchema);