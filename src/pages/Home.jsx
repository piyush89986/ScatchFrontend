import Header from "../components/Header";
import Footer from "../components/Footer";
import Register from "./Register";
import Login from "./Login";

const Home = () => {
  return (
    <>
      <Header />

      <div className="w-full h-screen flex px-20 pt-20">
        <Register />
        <Login />
      
      </div>

      <Footer />
    </>
  );
};

export default Home;
