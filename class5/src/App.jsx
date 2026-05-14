import React, { useState } from 'react'

const App = () => {
  const [formData, setFormData] = useState({
      name: "",
      email: "",
      password: ""
  })

  const submitHandler = (e)=>{
      e.preventDefault()
      console.log(formData)
      setFormData({
      name: "",
      email: "",
      password: ""
  })
  }
  const handleChange = (e)=>{
    setFormData({...formData, [e.target.name]: e.target.value })
   
  }

  return (
    <div className='w-full min-h-screen flex justify-center items-center bg-gray-100'>
      
      <form className='bg-white p-8 rounded-xl shadow-lg flex flex-col gap-4 w-[350px]' onSubmit={submitHandler}>

        <h1 className='text-2xl font-bold text-center'>
          Register Form
        </h1>

        <div className='flex flex-col'>
          <label className='mb-1 font-medium'>Name</label>
          <input
          value={formData.name}
            type="text"
            name='name'
            onChange={handleChange}
            placeholder='Enter your name'
            className='border border-gray-300 px-4 py-2 rounded-lg outline-none focus:border-blue-500'
          />
        </div>

        <div className='flex flex-col'>
          <label className='mb-1 font-medium'>Email</label>
          <input
            name='email'
            value={formData.email}
            type="email"
             onChange={handleChange}
            placeholder='Enter your email'
            className='border border-gray-300 px-4 py-2 rounded-lg outline-none focus:border-blue-500'
          />
        </div>

        <div className='flex flex-col'>
          <label className='mb-1 font-medium'>Password</label>
          <input
            name='password'
            value={formData.password}
            type="password"
             onChange={handleChange}
            placeholder='Enter your password'
            className='border border-gray-300 px-4 py-2 rounded-lg outline-none focus:border-blue-500'
          />
        </div>

        <button type='submit' className='bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition active:scale-95'>
          Submit
        </button>

      </form>

    </div>
  )
}

export default App