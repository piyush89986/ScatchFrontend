import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/users/register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      localStorage.setItem("token", data.token);
      navigate("/shop");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full flex items-center justify-center"
    >
      <div className="w-full max-w-md px-2 sm:px-6">
        <h3 className="text-3xl font-bold mb-2 text-center lg:text-left">
          Join <span className="text-blue-500">Scatch 🚀</span>
        </h3>

        <p className="text-gray-500 mb-5 text-center lg:text-left">
          Create your account and start shopping
        </p>

        {error && <p className="text-red-500 mb-2">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none transition"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none transition"
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />

          <input
            className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none transition"
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />

          <button
            className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition-all duration-300 hover:scale-105"
            disabled={loading}
          >
            {loading ? "Creating..." : "Create Account"}
          </button>
        </form>
      </div>
    </motion.div>
  );
}