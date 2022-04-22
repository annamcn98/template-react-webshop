import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Nav() {
  return (
    <Linkdiv>
        <Styledlink to='/products'><h2>Show all products</h2></Styledlink>
    </Linkdiv>
  )
}

const Styledlink = styled(Link) `
font-size: 2em;
text-decoration: none;
color: #df9ac0;
&:hover {
color: #f5b5d2;
}
`

const Linkdiv = styled.div `
`


export default Nav