import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      console.log("REGISTER SUCCESS:", data);

      // ✅ SAVE TOKEN (IMPORTANT)
      localStorage.setItem("token", data.token);

      // redirect after register
      navigate("/shop");
    } catch (err) {
      setError(err.message || "Something went wrong");
      console.error("REGISTER ERROR:", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-1/2 flex items-center justify-center">
      <div className="w-full px-32">
        <h3 className="text-4xl">
          welcome to <span className="text-blue-400 font-semibold">Scatch</span>
        </h3>

        <h4 className="text-2xl mb-5">create your account</h4>

        {error && <p className="text-red-500">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            className="input"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            className="input"
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            className="input"
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button className="btn" disabled={loading}>
            {loading ? "Creating..." : "Create My Account"}
          </button>
        </form>
      </div>
    </div>
  );
}