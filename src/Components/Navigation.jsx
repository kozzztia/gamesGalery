import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className='navigation'>
      <NavLink to='/'>indie</NavLink>
      <NavLink to='/action'>action</NavLink>
      <NavLink to='/strategy'>strategy</NavLink>
      <NavLink to='/shooter'>shooter</NavLink>
    </div>
  )
}

export default Navigation
