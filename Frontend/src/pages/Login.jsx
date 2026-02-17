
import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function Login({ setIsAuth }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/login", form);

      localStorage.setItem("token", res.data.token);

      setIsAuth(true);      // 👈 important
      navigate("/dashboard");

    } catch (err) {
      setMessage(err.response?.data?.message || "Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">

        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input
            type="email"
            required
            placeholder="Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <input
            type="password"
            required
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          {message && (
            <div className="bg-red-50 p-3 rounded text-red-700 text-center">
              {message}
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
