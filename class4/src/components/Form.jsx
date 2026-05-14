import React, { useEffect, useState } from 'react'

const Form = () => {
    const [formData , setFormData] = useState({
        fistName : "",
        lastName : "",
        dob: "",
        email: "",
        address: ""
    })

   

    return (
        <div className='p-20  justify-center items-center flex-1  bg-zinc-100 flex flex-col'>



            {/* Steps */}
            <div className='flex gap-6 border-b py-3 px-2'>

                <div className='flex gap-3 items-center'>
                    <div className='w-6 h-6 flex justify-center items-center text-sm bg-blue-400 rounded text-white'>
                        1
                    </div>

                    <span>Sign Up</span>
                </div>

                <div className='flex gap-3 items-center'>
                    <span className='w-6 h-6 flex justify-center items-center text-sm bg-zinc-300 rounded text-white'>
                        2
                    </span>

                    <span>Message</span>
                </div>

                <div className='flex gap-3 items-center'>
                    <span className='w-6 h-6 flex justify-center items-center text-sm bg-zinc-300 rounded text-white'>
                        3
                    </span>

                    <span>Check Box</span>
                </div>

            </div>

            {/* Content */}
            <div className='py-4 mt-4'>

                <p className='text-sm text-zinc-500'>
                    Step 1/3
                </p>

                <h1 className='text-2xl font-semibold mb-4'>
                    Sign Up
                </h1>

                <form className="grid md:grid-cols-2 gap-4">

                    {/* First Name */}
                    <div className="flex flex-col gap-1">
                        <label className="text-sm text-zinc-500">
                            First Name
                        </label>

                        <input
                            value={""}
                            type="text"
                            className="border px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-300"
                            placeholder="Enter your first name"
                        />
                    </div>

                    {/* Last Name */}
                    <div className="flex flex-col gap-1">
                        <label className="text-sm text-zinc-500">
                            Last Name
                        </label>

                        <input
                            type="text"
                            className="border px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-300"
                            placeholder="Enter your last name"
                        />
                    </div>

                    {/* DOB */}
                    <div className="flex flex-col gap-1">
                        <label className="text-sm text-zinc-500">
                            Date of Birth
                        </label>

                        <input
                            type="date"
                            
                            className="border px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-300"
                        />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1">
                        <label className="text-sm text-zinc-500">
                            Email
                        </label>

                        <input
                            type="email"
                            className="border px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-300"
                            placeholder="Enter your email"
                        />
                    </div>

                    {/* Address */}
                    <div className="flex flex-col gap-1 md:col-span-2">
                        <label className="text-sm text-zinc-500">
                            Address
                        </label>

                        <textarea
                            rows="4"
                            className="border px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-300"
                            placeholder="Enter your address"
                        />
                    </div>

                </form>

                {/* Button */}
                <div className='flex justify-end mt-6'>

                    <button
                        className='bg-blue-500 hover:bg-blue-600 transition text-white px-5 py-2 rounded-lg'
                    >
                        Next Step
                    </button>

                </div>

            </div>



        </div>
    )
}

export default Form