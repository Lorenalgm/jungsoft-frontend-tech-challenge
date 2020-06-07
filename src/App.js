import React, {useState} from 'react';
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
  const [numberOfPeople, setNumberOfPeople] = useState('');
  const [weeklyRecipes, setWeeklyRecipes] = useState('');
  const arrayPeople = [2,3,4];    
  const arrayRecipe = [3,4,5,6];    

  if (error) return <h1>Opa, algo deu errado :(</h1>
  if (loading) return <h1>Carregando...</h1>
  
  function updateWeeklyRecipes(number){
    setWeeklyRecipes(number);
  }

  function updateNumberOfPeople(number){
    setNumberOfPeople(number);
  }

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
                {
                  arrayPeople.map(people => (
                    <button onClick={() => updateNumberOfPeople(people)}>{people}</button>
                  ))
                }
              </div>
            </div>
          </div>
          <div className="recipes">
            <div className="recipes-title">Quantas receitas por semana?</div>
            <div className="recipes-number">
                {
                  arrayRecipe.map(recipe => (
                    <button onClick={() => updateWeeklyRecipes(recipe)}>{recipe}</button>
                  ))
                }
            </div>
          </div>
        </div>
        <div className="content-submit">
          <div className="price">
            <p>Preço do kit por semana</p>
            <span>
            {
                data.listPlans.map(plan => (
                  plan.weeklyRecipes === weeklyRecipes && plan.numberOfPeople === numberOfPeople &&
                    <h1 key={plan.id}>price: {plan.price}</h1>
                ))
            }
                </span>
          </div>
          <button>Quero assinar agora!</button>
        </div>
      </div>     
    </div >
  );
}

export default App;
