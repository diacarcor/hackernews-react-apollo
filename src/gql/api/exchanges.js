import {
    EXCHANGE_RATES_USD, EXCHANGE_RATES_EUR, REPORTS
  } from '../queries/exchanges_queries';

  import {
    useQuery,
  } from "@apollo/client";
  
//Function to call query
export function ExchangeRatesUSD() {
    const { loading, error, data } = useQuery(EXCHANGE_RATES_USD);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
  
    return data.rates.map(({ currency, rate }) => (
      <div key={currency}>
        <p>
          {currency}: {rate}
        </p>
      </div>
    ));
  }
  
  //Function to call query
 export function ExchangeRatesEUR() {
    const { loading, error, data } = useQuery(EXCHANGE_RATES_EUR);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
  
    return data.rates.map(({ currency, rate }) => (
      <div key={currency}>
        <p>
          {currency}: {rate}
        </p>
      </div>
    ));
  }


    
  //Function to call query
 export function GetReportDetail() {
  const { loading, error, data } = useQuery(REPORTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.reports.data.map(({ id, name }) => (
    <div key={id}>
      <p>
        {id}: {name}
      </p>
    </div>
  ));
}

  