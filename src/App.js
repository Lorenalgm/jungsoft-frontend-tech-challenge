import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import './App.css';

const GET_PLANS = gql`
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

  if (error) return <h1>Opa, algo deu errado :(</h1>
  if (loading) return <h1>Carregando...</h1>

  return (
    <div className="App">

      <div className="title">
        <h1>Configure o plano que</h1>
        <h1><b>melhor encaixa na sua rotina</b></h1>
      </div>
      <div className="container">
        <img src="https://media-cdn.tripadvisor.com/media/photo-s/18/1a/d5/1e/casteloes.jpg" alt="Food" />
        <div className="content">
          <div className="content-title">
              <h1>Gostou e ainda não é assinante?</h1>
              <h1>Escolha já um plano semanal!</h1>
          </div>
          <div className="plans">
            <div className="people">
              <div className="people-title">Receita para quantas pessoas?</div>
              <div className="people-number">
                <div>2</div>
                <div>4</div>
              </div>
            </div>
          </div>
          <div className="recipes">
            <div className="recipes-title">Quantas receitas por semana?</div>
            <div className="recipes-number">
              <div>1</div>
              <div>2</div>
              <div>3</div>
            </div>
          </div>
        </div>
        <div className="content-submit">
          <div className="price">
            <p>Preço do kit por semana</p>
            <h1>R$69,00</h1>
          </div>
          <button>Quero assinar agora!</button>
        </div>
      </div>

      {/* <header className="App-header">
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
      </header> */}
    </div >
  );
}

export default App;
