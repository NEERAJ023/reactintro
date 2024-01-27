import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import Styled from 'styled-components'

const Navbar = () => {
  return (
    <Div >
        <NavLink to="/Home">Home</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/Contact">Contact</NavLink>
        <NavLink to="/Servies">Servies</NavLink>
    </Div>
  )
}

export default Navbar

let Div =Styled.div`
display:flex;
margin:auto;
width:25%;
gap:20px;
a{
  font-size:22px;
  text-decoration:none;
}
.active{
  color:green;
}
`