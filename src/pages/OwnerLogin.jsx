import { useState } from "react";
import Header from "../components/Header";

const OwnerLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔗 TODO: connect backend API here
    const payload = { email, password };
    console.log("Owner Login Data:", payload);
  };

  return (
    <>
      <Header />

      <div className="w-full h-screen flex px-20 pt-20">
        <div className="w-1/2 flex items-center justify-center h-full">
          <div className="w-full px-32">
            <h4 className="text-2xl capitalize mb-5">Admin Access</h4>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                className="block bg-zinc-100 w-full px-3 py-2 border rounded-md border-zinc-200"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <input
                className="block bg-zinc-100 w-full px-3 py-2 border rounded-md border-zinc-200"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button
                type="submit"
                className="px-5 rounded-full py-3 mt-2 bg-blue-500 text-white w-full"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default OwnerLogin;
