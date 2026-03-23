import React from 'react'
import axios from 'axios'

const App = () => {
  
  async function getData(){
    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=100');  // promise
    console.log(response.data);
  }

  return (
    <div>
      <button className='border-2 border-black bg-blue-300 m-10' onClick={getData}>Get Data</button>
    </div>
  )
}

export default App
