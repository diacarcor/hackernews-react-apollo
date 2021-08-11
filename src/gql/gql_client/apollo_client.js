
// 1
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';

// // URL
const httpLink = createHttpLink({
  uri: 'https://48p1r2roz4.sse.codesandbox.io'
});

// Instance Client
export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});
