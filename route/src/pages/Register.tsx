import React, { useState } from "react";
import axios from "axios"


interface form {
    fullName: string,
    email: string,
    phone: string,
    password: string
}

const Register = () => {
    const [formData, setFormData] = useState<form>({
        fullName: "",
        email: "",
        phone: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "http://localhost:4000/api/admin/register",
                formData
            );

            console.log(response.data);
            localStorage.setItem("auth", response.data.success)

            alert("Register Successfully");
            setFormData({
                fullName: "",
                email: "",
                phone: "",
                password: "",
            })
        } catch (error: any) {
            console.log(error.response?.data || error.message);

            alert(
                error.response?.data?.message || "Something went wrong"
            );
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
            >
                <h2 className="text-3xl font-bold text-center mb-6">
                    Register Form
                </h2>

                {/* Full Name */}
                <div className="mb-4">
                    <label className="block mb-2 font-medium">Full Name</label>
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Enter full name"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Email */}
                <div className="mb-4">
                    <label className="block mb-2 font-medium">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Phone */}
                <div className="mb-4">
                    <label className="block mb-2 font-medium">Phone</label>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Enter phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Password */}
                <div className="mb-6">
                    <label className="block mb-2 font-medium">Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
                >
                    Register
                </button>
            </form>
        </div>
    );
};

export default Register;