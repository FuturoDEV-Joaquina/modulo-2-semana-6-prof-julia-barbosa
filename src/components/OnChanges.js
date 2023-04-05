import React from 'react'

const OnChanges = () => {
    const handleChange = () => {
        alert('valor do input foi mudado.')
    }

  return (
    <div>
        <form>
            <label>Nome:</label>
            <input type="text" onChange={handleChange}/>
        </form>
    </div>
  )
}

export default OnChanges