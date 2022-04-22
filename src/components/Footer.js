import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <Div>
      <Headline>Copyright by Anna Nilsson</Headline>
    </Div>
  )
}

const Div = styled.div`
background-color: #fbd99d;
height: 15vh;
display: flex;
justify-content: center;
align-items: center;

`

const Headline = styled.p `
color: white;
font-size: 3em;
font-weight: bold;
`

export default Footer