
const { ApolloServer } = require('apollo-server-lambda');

// Import GraphQL schema
const typeDefs = require('./lib/schema');

// Import GraphQL resolvers
const resolvers = require('./lib/resolvers');

const server = new ApolloServer({ typeDefs, resolvers });

exports.graphqlHandler = server.createHandler();
