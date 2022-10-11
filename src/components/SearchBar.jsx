import React, { useState } from 'react';
import "../styles/SearchBar.css"

export default function SearchBar({onSearch}) {
  // acá va tu código
  const [SearchImput, setSearchImput] = useState("")
  const changes = (e)=>{
    
    setSearchImput(e.target.value)
    
  }
  const funcion =()=>{
    if (SearchImput !== "caracas"){
    onSearch(SearchImput)
  }else{
    alert("no Busco webadas rata d rmd")
  }}


  return ( 
    <div className='contain'>
    <input
      className='input'
      type="text"
      placeholder="Ciudad..."
      id='search'
      name='search'
      onChange={changes}
    />
    <button className='button' onClick={funcion}>Agregar</button>
    </div>
  )
};
