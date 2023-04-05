import React from 'react';
import happy from './../img/happy.png';
import triste from './../img/triste.jpg';
import './OnMouse.css';

const OnMouseOver = () => {

  const alertImagem = () => {
    alert('você passou o mouse na imagem.')
  }
  
  return (
    <div>
      <h1 className="texto-carinha">CARINHAS</h1>
      <img src={happy} alt='carinha feliz' style={{width: "100px", height: "100px", paddingRight: "30px"}} onMouseOver={alertImagem}></img>
      <img src={triste} alt='carinha triste' style={{width: "100px", height: "100px"}}></img>
    </div>
  )
}

export default OnMouseOver