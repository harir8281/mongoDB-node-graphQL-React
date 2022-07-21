const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: String!
  }

  type query {
    users: [User!]!
  }
`;

module.exports = { typeDefs };
