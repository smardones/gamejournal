const mongoose = require('mongoose');

const {Schema} = mongoose;

const EntrySchema = new Schema({
    title: {
        type: String
    },
    game: {
        type: String
    },
    body: {
        type: String
    },
    photos: [String]

})