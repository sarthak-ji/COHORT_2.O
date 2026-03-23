import React from 'react'
import Card from './Components/Card'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <div className=''>
      {/* className='flex gap-4 ml-50' */}
      {/* <Card name="Sarthak" age="22" />
      <Card name="Krishna" age="25" />
      <Card name="Harsh" age="30" />
      <Card name="Abhijeet" age="23" /> */}

      <Navbar className='bg-cyan-800 font-semibold text-amber-50 text-xl' title="Udemy" links={['Home', 'Courses', 'About', 'Contact']} />
      <Navbar className='bg-amber-800 font-semibold text-amber-50 text-xl' title="WCE" links={['Home', 'Services', 'Support', 'Account']} />
      <Navbar className='bg-blue-950 font-semibold text-amber-50 text-xl' title="Buy-On" links={['Home', 'Products', 'Cart', 'Help', 'Contact Us']} />
    </div>
  )
}

export default App
