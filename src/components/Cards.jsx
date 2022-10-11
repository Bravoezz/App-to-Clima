import React from 'react';
import Card from './Card';
import "../styles/stylesCard.css"



export default function Cards({cities,onClose}) {
  // acá va tu código
  // tip, podés usar un map
  
  return (
  
  <div className='componentCards'>
    
    {
        cities.map(
          (e,i)=><Card 
          
          max={e.main.temp_max}
          min={e.main.temp_min}
          name={e.name}   
          img={e.weather[0].icon}
          onClose={onClose}
          key={i}
          id={e.id}
        /> )
    }
  </div>
  
    )
};

