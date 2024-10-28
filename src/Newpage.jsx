import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Newpage() {
  const [Data, setData] = useState('Jackson')

  const handleSubmit = () => {
    setData('Peter')
  }
  return (
    <div>
      <h1>Hello {Data}</h1>
      <button onClick={handleSubmit}>Name</button>

      <a href="/contact">CONTACT</a>
      <Link to={"/contact"}>Contact</Link>
    </div>
  )
}

export default Newpage