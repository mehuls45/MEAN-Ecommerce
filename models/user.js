const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
const userSchema = new Schema({

    fname: { type: String },
    lname: { type: String },
    email: { type: String , unique: true},
    password: { type: String },
    contact: { type: String , unique: true},
    isAdmin: { type: String },

    country: { type: String },
    state: { type: String },
    zip: { type: String }

});

userSchema.plugin(uniqueValidator);
module.exports = mongoose.model('User', userSchema);