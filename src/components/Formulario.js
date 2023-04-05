import React, { useState } from 'react';

const Formulario = () => {

    const [nome, setNome] = useState();
    const [email, setEmail] = useState();

    const handleNome = (event) => {
        console.log(event.target.value);
        setNome(event.target.value);
        //console.log(event)
    }

    const handleSubmit = (event)=> {
        event.preventDefault();
        console.log("enviando formulario")
        console.log("nome:", nome, "email:" , email);

        setNome("");
        setEmail("");
    }

  return (
    <div>
        <h1>FORMULÁRIO</h1>
        <form onSubmit={handleSubmit}>
            <label>Nome:</label>

            <input type="text" name="name" placeholder="Digite seu nome" 
            onChange={handleNome} value={nome}/>

            <label>Email:</label>

            <input type="text" name="email" placeholder="Digite seu email"
            onChange={(event) => setEmail(event.target.value)} value={email}/>

            <input type="submit" value="enviar"/>
        </form>
    </div>
  )
}

export default Formulario