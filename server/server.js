const express = require('express');
const { ApolloServer } = require('apollo-server-express')


const PORT = process.env.PORT || 3001;
const app = express();
const db = require('./config/connection')

app.use(express.urlencoded({ extended: false}));
app.use(express.json());


db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server runing on port ${PORT}`);
    });
})

