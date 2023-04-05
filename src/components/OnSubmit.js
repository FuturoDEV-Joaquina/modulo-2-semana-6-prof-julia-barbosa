import React from 'react'

const OnSubmit = () => {

    const submeterForm = (event) =>{
        event.preventDefault();
        alert('foi enviado o formulario');
        console.log(event);
    } 

  return (
    <div>
        <form onSubmit={submeterForm}>
            <label>Email:</label>
            <input type="text"/>
            <button type="submit">Enviar</button>
        </form>
    </div>
  )
}

export default OnSubmit