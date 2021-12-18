const { ApolloServer, gql } = require('apollo-server');
const { mongoose } = require("./database");
const resolvers = require('./resolvers');
const typeProyecto = require('./typeDefs');

const server = new ApolloServer({
  typeDefs: typeProyecto,
  resolvers,
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`
    🚀  Server is ready at ${url}
  `);
});