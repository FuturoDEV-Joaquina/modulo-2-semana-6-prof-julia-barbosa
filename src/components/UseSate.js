import React, { useState } from 'react';
import './UseSate.css';

const UseSate = () => {
  const [color, setColor] = useState("vermelho");
    
  return (
    <div>
        <h1>Hooks - Exemplos</h1>
        <h1>Minha cor favorita é: {color}</h1>
        <button onClick={() => setColor("azul")} className="btn">Mudar a cor</button>
    </div>
  )
}

export default UseSate