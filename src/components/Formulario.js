import React, { useState } from 'react';
import './Formulario.css';

const Formulario = ({ usuario }) => {

    const [nome, setNome] = useState(usuario ? usuario.nome : " ");
    const [email, setEmail] = useState(usuario ? usuario.email : " ");
    const [bio, setBio] = useState();
    const [profissoes, setProfissoes] = useState();

    const handleNome = (event) => {
        console.log(event.target.value);
        setNome(event.target.value);
        //console.log(event)
    }

    const handleSubmit = (event)=> {
        //envia os dados do formulario
        event.preventDefault();
        console.log("enviando formulario")
        console.log("nome:", nome, "email:" , email, "bio", bio, "profissão selecionada:", profissoes);

        //reseta o formulario
        setNome("");
        setEmail("");
        setBio("");
        setProfissoes("");
    }

  return (
    <div>
        <div>
            <h1 className='title'>FORMULÁRIO</h1>
        </div>
        <form onSubmit={handleSubmit} style={{marginLeft: "30px"}}>
            <label>
                <ul className='lista'>
                <span className='span-nome'>Nome:</span>
                <input type="text" name="name" placeholder="Digite seu nome" 
                onChange={handleNome} value={nome}/>    
                </ul>
            </label>

            <label>
                <ul className='lista'>
                <span className='span-nome'>Email:</span>
                <input type="text" name="email" placeholder="Digite seu email"
                onChange={(event) => setEmail(event.target.value)} value={email}/>
                </ul>
            </label>

            <label>
                <ul className='lista'>
                <span className='span-nome'>Profissão:</span>
                <input type="text" name="email" placeholder="Digite sua profissão"
                onChange={(event) => setEmail(event.target.value)} value={email}/>
                </ul>
            </label>
            <label>
                <ul style={{display: "grid"}}>
                    <span>Biografia:</span>
                    <textarea name='bio' placeholder='Digite sua história na turma Joaquina' 
                    value={bio} onChange={(event) => setBio(event.target.value)}></textarea>
                </ul>
            </label>

            <label>
                <span>Profissões na área de Tecnologia:</span>
                <ul>
                    <select name="profissoes" onChange={(event) => setProfissoes(event.target.value)}>
                        <option value="frontEnd">Front End</option>
                        <option value="backEnd">Back End</option>
                        <option value="fullStack">FullStack</option>
                    </select>
                </ul>
            </label>
           

            <input type="submit" className='btn' value="enviar formulário" />
        </form>
    </div>
  )
}

export default Formulario