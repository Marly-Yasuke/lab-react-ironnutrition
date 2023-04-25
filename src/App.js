import logo from './logo.svg';
import './App.css';
import foodsData from './foods.json';
import React, {useState} from 'react';


function App() {
  const [foods, setFouds]=useState(foodsData)
  return (
    <div className="App">
<h2>List of food</h2>
{
  foods.map(food=>{
    return(
      <div key={food.name}>
        <p> {food.name}</p>
  <img src={food.image} alt={food.name} width="60" height="40" />
      </div>
    )
  })
}
    </div>
  );
}
//only first iteration done
export default App;
