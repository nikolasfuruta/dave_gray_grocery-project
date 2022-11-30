import React from 'react'

function Header({title}) {
  const h1Header = {
    fontSize:'50px',
  }
  return (
    <header style={{
      backgroundColor:'royalblue',
      color:'#fff'
    }}>
      <h1 style={h1Header}>{title}</h1>
    </header>
  )
}

export default Header;