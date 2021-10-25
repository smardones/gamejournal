const mongoose = require('mongoose');
const { StringDecoder } = require('string_decoder');

const {Schema} = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String
    },
    entries: [Entry]
})

const User = mongoose.Model("User", UserSchema);

module.exports = User;