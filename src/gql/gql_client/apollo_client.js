
// 1
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';

// // URL
const httpLink = createHttpLink({
  //uri: 'https://48p1r2roz4.sse.codesandbox.io',
  uri:'https://maple-staging.leafgrow.io/graphql/',
  //uri:'http://127.0.0.1:8001/graphql/',
  // fetchOptions: {
  //   mode: 'no-cors'
  // }
 
});

// Instance Client
export const client = new ApolloClient({
  link: httpLink,
  //uri:'https://maple-staging.leafgrow.io/graphql/',
  cache: new InMemoryCache(),
 

});
