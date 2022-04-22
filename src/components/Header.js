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
        <Nav />
      </Div>
  )
}

const Div = styled.div`
flex-direction: column;
background-color: white;
height: 60vh;
display: flex;
align-items: center;
`

const Img = styled.img `
height: 50vh;
width: 100vw;
`

export default Header