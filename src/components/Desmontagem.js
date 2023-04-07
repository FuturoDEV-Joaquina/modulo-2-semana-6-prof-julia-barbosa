import React, { useEffect, useState } from 'react'

const Desmontagem = () => {
    const [cont, setCont] = useState(0);
    const [shouldRender, setShouldRender] = useState(true);

    useEffect(() =>{
        return () => {
            console.log("Estou sendo desmontado");
        }
    }) 

  return (
    <div>
        { shouldRender &&
        <div>
        <h1> Contador: {cont}</h1>
        <button onClick={() => setCont(cont + 1)}> somar contador</button>
        </div>
        }
        <button onClick={() => setShouldRender(!shouldRender)}>Mostrar contador</button>
    </div>
  )
}

export default Desmontagem;