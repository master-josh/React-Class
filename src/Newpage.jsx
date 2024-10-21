import React, { useState } from 'react'

function Newpage() {
  const [Data, setData] = useState('Jackson')

  const handleSubmit = () => {
    setData('Peter')
  }
  return (
    <div>
      <h1>Hello {Data}</h1>
      <button onClick={handleSubmit}>Name</button>
    </div>
  )
}

export default Newpage