import { ApolloClient, InMemoryCache } from '@apollo/client';

export const apolloClient = new ApolloClient({
  uri: 'https://yourcar-rental.herokuapp.com/graphql' as any,
  cache: new InMemoryCache(),
});
