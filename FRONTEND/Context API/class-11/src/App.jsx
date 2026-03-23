import React, { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {

  const [theme, setTheme] = useState("Light")

  return (
    <>
    <Navbar theme = {theme} setTheme = {setTheme} />
    </>
  )
}

export default App
