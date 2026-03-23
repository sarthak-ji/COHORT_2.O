import React from 'react'

function Navbar(props) {
  return (
    <div>
      <h1>This is {props.theme}</h1>
      <button onClick={() => {
        props.setTheme("dark")
      }} >
        Change theme
      </button>
    </div>
  )
}

export default Navbar
