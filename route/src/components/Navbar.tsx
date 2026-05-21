import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Link to={"/"}>home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/contact"}>contact</Link>
      <Link to={"/service"}>service</Link>
    </div>
  )
}

export default Navbar
