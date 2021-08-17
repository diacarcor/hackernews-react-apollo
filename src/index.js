import React from 'react';
import {render} from 'react-dom';
import './styles/index.css';

// 1
import {
  ApolloProvider,

} from '@apollo/client';

import {ExchangeRatesUSD, ExchangeRatesEUR, GetReportDetail} from './gql/api/exchanges.js'
import {client} from './gql/gql_client/apollo_client.js'

function App() {
  return (
    <div>
      <h1>My first Apollo app 🚀</h1>
      {/* <h2>USD Exchange 🚀</h2>
      <ExchangeRatesUSD />
      <h2>EUR Exchange 🚀</h2>
      <ExchangeRatesEUR /> */}
      <h2>Reports 🚀</h2>
      <GetReportDetail />
    </div>
  );
}

// Render to wrap Apollo Client
render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);


