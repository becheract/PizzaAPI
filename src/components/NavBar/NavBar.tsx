import React from 'react'
import { Link } from 'react-router-dom'
export default function NavBar() {
    
  return (
    <div>
        NavBar component

    {/*create a nav bar the links*/}
    <nav>
    <ul>
        <Link to ="/">Home</Link>
        <Link to ="/orders">Orders</Link>
        <Link to ="/get-your-pizza">Get Your Pizza</Link>
    </ul>
    </nav>
    </div>
  )
}
