import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className='navigation'>
      <NavLink to='/'>indie</NavLink>
      <NavLink to='/test2'>action</NavLink>
      <NavLink to='/test3'>strategy</NavLink>
      <NavLink to='/test4'>shooter</NavLink>
    </div>
  )
}

export default Navigation
