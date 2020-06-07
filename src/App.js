import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import './App.css';
import logo from './assets/backgrounds/bg1.jpg';
import user from './assets/icons/user.svg';
import clock from './assets/icons/clock.svg';
import tools from './assets/icons/kitchen-tools.svg';

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
  const [numberOfPeople, setNumberOfPeople] = useState(3);
  const [weeklyRecipes, setWeeklyRecipes] = useState(3);
  const arrayPeople = [3, 4];
  const arrayRecipe = [3, 4, 5];

  if (error) return <h1>Opa, algo deu errado :(</h1>
  if (loading) return <h1>Carregando...</h1>

  function updateWeeklyRecipes(number) {
    setWeeklyRecipes(number);
  }

  function updateNumberOfPeople(number) {
    setNumberOfPeople(number);
  }

  return (
    <div className="App">

      <div className="title">
        <h1>Configure o plano que</h1>
        <h1><span className="teste">melhor encaixa na sua rotina</span></h1>
      </div>
      <div className="container">
        <img src={logo} alt="Food" />
        <div className="content">
          <div className="content-title">
            <h1>Gostou e ainda não é assinante?</h1>
            <h1>Escolha já um plano semanal!</h1>
          </div>
          <div className="plans">
            <div className="people">
              <div className="people-title">
                <img src={user} alt={user} />
                <p>
                  <span>Receita para</span><br></br>
                  <span>quantas pessoas?</span>
                </p>
              </div>
              <div className="people-number">
                {
                  arrayPeople.map(people => (
                    <button className={numberOfPeople === people? 'active': ''} onClick={() => updateNumberOfPeople(people)}>{people}</button>
                  ))
                }
              </div>
            </div>
            <div className="recipes">
              <div className="recipes-title">
                <img src={tools} alt={tools} />
                <p>
                  <span>Quantas receitas</span><br></br>
                  <span>por semana?</span>
                </p>
              </div>
              <div className="recipes-number">
                {
                  arrayRecipe.map(recipe => (
                    <button className={weeklyRecipes === recipe? 'active': ''} onClick={() => updateWeeklyRecipes(recipe)}>{recipe}</button>
                  ))
                }
              </div>
            </div>
          </div>
          <div className="content-submit">
            <div className="price">
              <p>PREÇO DO KIT POR SEMANA</p>
              <span>
                {
                  data.listPlans.map(plan => (
                    plan.weeklyRecipes === weeklyRecipes && plan.numberOfPeople === numberOfPeople &&
                    <h1 key={plan.id}><span>R$</span> {plan.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h1>
                  ))
                }
              </span>
            </div>
            <button>Quero assinar agora!</button>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
