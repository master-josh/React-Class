import React, { useState } from 'react'

function Homepge() {
  const [Name, Setname] = useState("")

  console.log(Name);
  
  return (
    <div>
      <h1 className='text-red-500'>Forms</h1>
      <form action="">
        <input type="text" placeholder='Name' onChange={(e)=> Setname(e.target.value)}/>

        <button>Submit</button>
      </form>
      <h1>{Name}</h1>
    </div>
  )
}

export default Homepge