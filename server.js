const express = require('express');
const graphqlHTTP = require('express-graphql');
const app = express();
const GraphQLSchema = require('./graphql/schema');
const cors = require('cors');
const PORT = process.env.PORT || 8080;

// Allow cross origin
app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema: GraphQLSchema,
    graphiql: true          // DEBUG
}));

app.listen(PORT, () => console.log(`Listening on ${PORT}...`));