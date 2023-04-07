import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [contador, setContador] = useState(0);

    useEffect(() => {
        setTimeout(() => {
          setContador((contador) => contador + 1)
        }, 1000);
    });

  return (
    <div>
        <h1>Use Effect</h1>
        <h2>Fui renderizado {contador} vezes!</h2>
    </div>
  )
}

export default UseEffect