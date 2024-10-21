// Logical AND && 
// {Admin && <h1>welcome admin</h1>}

// Logical OR ||
// {Admin || <h1>welcome user</h1>}

// if else statement
// if (condition) {
    //   return true
// } else {
        //  return false
// }  

// Ternary operator
// {condition ? true : false}




import React, { useState } from 'react'
import Test from '../Test'

function Render() {
    const [Admin, SetAdmin] = useState(false)
  return (
    <div>
        {/* {Admin ? <h1>welcome admin</h1> : <h1>welcome user</h1>} */}
        {/* {Admin && <h1>welcome admin</h1>} */}
        {/* {Admin && <Test/>} */}
        
        {Admin ? <Test SetAdmin={SetAdmin}/> : <h1>welcome user</h1>}
        <button onClick={()=> SetAdmin(true)}>Login</button>
    </div>
  )
}

export default Render