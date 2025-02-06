import React from 'react'
import { Link, Outlet } from 'react-router'
function Navbar() {
  return (
    <div className='mx-auto flex w-full justify-between'>
      <Link>Link 1</Link>
      <Link>Link 1</Link>
      <Link>Link 1</Link>
      <Link>Link 1</Link>

      <Link>searchbar</Link>
      <Link>Cart</Link>
      <Link>Dark Mode</Link>
      <Link>Sign In</Link>
    </div>
  )
}

export default Navbar
