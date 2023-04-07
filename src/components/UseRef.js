import React, { useEffect, useRef, useState } from 'react';
    

const UseRef = () => {
    const numeroRef = useRef(0);
    const [contadorA, setContadorA] = useState(0);
    const [contadorB, setContadorB] = useState(0);

    useEffect(() =>{
    numeroRef.current = numeroRef.current + 1;
    //setContadorA(contadorA + 1);
    });

  return (
    <div>
        <h1>UseRef</h1>
        <h2>O componente renderizou: {numeroRef.current} vezes.</h2>
        <h1>Contador A: {contadorA}</h1>
        <button onClick={() => setContadorA(contadorA + 1)}>contador A</button>
        <h1>Contador B: {contadorB}</h1>
        <button onClick={() => setContadorB(contadorB + 1)}>contador A</button> 
    </div>
  )
}

export default UseRef