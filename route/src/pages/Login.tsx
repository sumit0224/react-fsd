import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        "http://localhost:4000/api/admin/login",
        formData
      );

      console.log(response.data);

      // save token/auth
      localStorage.setItem("auth", "true");

      alert("Login Successfully");

      navigate("/");
    } catch (error: any) {
      console.log(error.response?.data || error.message);

      alert(
        error.response?.data?.message || "Login Failed"
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-[400px]"
      >
        <h1 className="text-3xl font-bold text-center mb-6">
          Login
        </h1>

        <div className="mb-4">
          <label className="block mb-2">Email</label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="Enter email"
            className="w-full border p-3 rounded outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Password</label>

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={changeHandler}
            placeholder="Enter password"
            className="w-full border p-3 rounded outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white p-3 rounded"
        >
          Login
        </button>

        <p className="text-center mt-4">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-blue-500"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;