import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handlesubmit(e) {
    e.preventDefault();
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/users/users/register`,
        { fullname, email, password },
        { withCredentials: true }
      );

      console.log("REGISTER SUCCESS:", res.data);
      navigate("/shop");
    } catch (error) {
      console.error("REGISTER ERROR:", error.response?.data || error.message);
    }
  }

  return (
    <div className="w-1/2 flex items-center justify-center">
      <div className="w-full px-32">
        <h3 className="text-4xl">
          welcome to <span className="text-blue-400 font-semibold">Scatch</span>
        </h3>

        <h4 className="text-2xl mb-5">create your account</h4>

        <form onSubmit={handlesubmit} className="space-y-3">
          <input
            className="input"
            placeholder="Full Name"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />

          <input
            className="input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            className="input"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="btn">Create My Account</button>
        </form>
      </div>
    </div>
  );
}
