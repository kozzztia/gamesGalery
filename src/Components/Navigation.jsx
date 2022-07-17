import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './navigation.module.scss';
const Navigation = () => {
  console.log(style)
  return (
    <div className={style.navigation}>
      <NavLink to='/'>indie</NavLink>
      <NavLink to='/action'>action</NavLink>
      <NavLink to='/strategy'>strategy</NavLink>
      <NavLink to='/shooter'>shooter</NavLink>
    </div>
  )
}

export default Navigation
