import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Nav from './Nav'
import logo from './Revive.png'

function Header() {
  return (
    
    <Div>
      <Link to='/products'>
      <Img src={logo} alt="Logo"></Img>
      </Link>
      <Navdiv>
        <Nav />
      </Navdiv>
      </Div>
  )
}

const Div = styled.div`
flex-direction: column;
background-color: white;
height: 25vw;
display: flex;
align-items: center;
`

const Img = styled.img `
height: 20vw;
width: 100vw;
`

const Navdiv = styled.div `
height: 10vw;
display: flex;
align-items: center;
`

export default Header