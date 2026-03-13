import Header from "../components/Header";
import Footer from "../components/Footer";

const Admin = () => {
  return (
    <>
      <Header />

      <div className="w-full h-screen flex px-20 py-20">
        <div className="w-1/4">
          <a className="block mb-2">All Products</a>
          <a className="block mb-2">Create new product</a>
        </div>

        <div className="w-3/4 flex flex-wrap gap-5">
          {[1, 2, 3, 4].map((_, i) => (
            <div key={i} className="w-60 bg-red-500">
              <div className="h-52 bg-yellow-500"></div>
              <div className="flex justify-between px-4 py-4">
                <div>
                  <h3>Clinge Bag</h3>
                  <h4>₹ 1200</h4>
                </div>
                <button className="w-7 h-7 bg-white rounded-full">+</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Admin;
