const mongoose = require('mongoose');


async function dbConnection() {
    await    mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/gamejournal',
        {    useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
}

module.exports = dbConnection;;