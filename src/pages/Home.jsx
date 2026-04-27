import Header from "../components/Header";
import Footer from "../components/Footer";
import Register from "./Register";
import Login from "./Login";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <Header />

      <div className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-center px-5 sm:px-10 lg:px-20 pt-20 gap-10 bg-gradient-to-br from-blue-50 via-white to-purple-50">

        {/* Register */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 backdrop-blur-lg bg-white/70 shadow-xl rounded-3xl p-6"
        >
          <Register />
        </motion.div>

        {/* Login */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 backdrop-blur-lg bg-white/70 shadow-xl rounded-3xl p-6"
        >
          <Login />
        </motion.div>

      </div>

      <Footer />
    </>
  );
};

export default Home;