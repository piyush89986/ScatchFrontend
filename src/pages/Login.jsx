import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      localStorage.setItem("token", data.token);
      navigate("/shop");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full flex items-center justify-center"
    >
      <div className="w-full max-w-md px-2 sm:px-6">
        <h4 className="text-2xl font-semibold mb-5 text-center lg:text-left">
          Welcome Back 👋
        </h4>

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <form className="space-y-4" onSubmit={handleLogin}>
          <input
            className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all duration-300 hover:scale-105"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </motion.div>
  );
}