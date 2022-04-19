import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav>
        <Link to="/products">Tillbaka till alla produkter</Link>
    </nav>
  )
}

export default Nav