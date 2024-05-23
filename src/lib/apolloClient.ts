import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export const api = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

export const QUERY = gql`
  {
    user() {
      _id
      isAdmin
      username
      email
      createdAt
    }
  }
`;
