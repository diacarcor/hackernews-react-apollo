import {
    gql
  } from '@apollo/client';

//Query for GetExchangeRates for USD
export const EXCHANGE_RATES_USD = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

//Query for GetExchangeRates for EU
export const EXCHANGE_RATES_EUR = gql`
  query GetExchangeRates {
    rates(currency: "EUR") {
      currency
      rate
    }
  }
`;