import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='navbar'>
<h1>Read More App</h1>
<div className='navbar-title'>
    
    <Link to='/favourites'> 
    Your Favourites<span> 0 </span>
    </Link>
    
</div>
    </div>

    </>
  )
}

export default Navbar