import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav>
        <Link to="/products"><h2>Back to all products</h2></Link>
    </nav>
  )
}

export default Nav