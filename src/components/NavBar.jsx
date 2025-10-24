import React from 'react'
import { NavLink } from 'react-router-dom'

const activeStyle = ({ isActive }) => ({
  marginRight: '1rem',
  textDecoration: isActive ? 'underline' : 'none',
  color: isActive ? '#0b5' : '#000'
})

export default function NavBar() {
  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #ddd' }}>
      <NavLink to="/" style={activeStyle} end>Home</NavLink>
      <NavLink to="/about" style={activeStyle}>About</NavLink>
      <NavLink to="/profile" style={activeStyle}>Profile</NavLink>
    </nav>
  )
}
