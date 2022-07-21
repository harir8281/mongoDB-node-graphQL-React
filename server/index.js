const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema/type-def");

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`your api is running AT: ${url}`);
});


