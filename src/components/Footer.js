import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <Div>
      <Headline>Copyright</Headline>
    </Div>
  )
}

const Div = styled.div`
background-color: papayawhip;
height: 10vh;
margin: 0px 10px;

`

const Headline = styled.p `
color: violet;
padding-top: 40px;
font-size: xx-large;
`

export default Footer