import React from 'react'

const Events = () => {

    function handleClick(){
      console.log('clicou aqui');
    }

  return (
    <div>
        <h1>AULA 1 - SEMANA 6</h1>
        <h2>EVENTOS</h2>
        <button onClick={handleClick}>Clique aqui</button>
    </div>
  )
}

export default Events