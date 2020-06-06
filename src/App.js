import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import './App.css';

const GET_PLANS = gql `
{
  listPlans {
    id
    weeklyRecipes
    numberOfPeople
    price
  }
}

`


function App() {
  const { loading, error, data } = useQuery(GET_PLANS);

  if(error) return <h1>Opa, algo deu errado :(</h1>
  if(loading) return <h1>Carregando...</h1>

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          {data.listPlans.map(plan => (
            <div key={plan.id}>
              <h1>{plan.price}</h1>
              <h2>{plan.numberOfPeople}</h2>
              <h3>{plan.weeklyRecipes}</h3>
              <h4>{plan.id}</h4>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
