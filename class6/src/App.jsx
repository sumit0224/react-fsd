import React, { useState } from 'react'

const App = () => {
  const [password, setPassword] = useState("")

  return (
    <div className='w-screen h-screen bg-zinc-600 text-white'>
        <h1>PASSWORD GENREATOR</h1>
        <input type="text" name="" id=""  placeholder='password'/>
        <button>NEW</button>


    </div>
  )
}

export default App
