const mongoose = require('mongoose');


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/gamejournal',)
        .catch(err => console.log(err));


module.exports = mongoose.connection;