const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
const categorySchema = new Schema({

    categoryName: { type: String, unique: true },

});

categorySchema.plugin(uniqueValidator);
module.exports = mongoose.model('Category', categorySchema);