import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <Div>
      <Headline>
        LOGO/SLOGAN
      </Headline>
    </Div>
  )
}

const Div = styled.div`
background-color: papayawhip;
height: 10vh;
margin: 0px 10px;

`

const Headline = styled.h1 `
color: violet;
padding-top: 40px;
`

export default Header