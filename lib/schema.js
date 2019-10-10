
const { gql } = require('apollo-server-lambda');

const typeDefs = gql`
type User  {
  userId: String!,
  name: String,
  age: Int,
  response: [Post!]
}
type Post {
  userId: Int!,
  title: String,
  body: String
}
type Query {
  hello: String,
  testApiCall(userId: Int!): User!
}
`;

module.exports = typeDefs;