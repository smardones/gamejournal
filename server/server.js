const express = require('express');
const { ApolloServer } = require('apollo-server-express')


const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

app.listen(PORT, () => {
    console.log(`API server runing on port ${PORT}`);
    // console.log(`Use GraphQL at http://localthost:${PORT}.${server.graphqlPath}`)
});