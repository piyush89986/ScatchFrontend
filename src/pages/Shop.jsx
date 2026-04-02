import React, { useEffect, useState } from "react";
import Header from "../components/Header";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/shop`, {
          method: "GET",
          credentials: "include",
        });

        const data = await res.json();
        console.log(data);
        

        setProducts(data.products);
        setSuccess(data.success || "");
      } catch (error) {
        console.error("Error fetching shop data:", error);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = async (productId) => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/addtocart/${productId}`,
        {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
        },
      );

      const data = await res.json();
      console.log(data);

      if (data.success) {
        setSuccess(data.message);
        setTimeout(() => setSuccess(""), 2000);
      }
    } catch (error) {
      console.error("Add to cart error:", error);
    }
  };

  return (
    <>
      <Header />

      {success.length > 0 && (
        <div className="absolute top-5 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 rounded-md bg-blue-500">
          <span className="inline-block mt-1 mb-1 text-white">{success}</span>
        </div>
      )}

      <div className="w-full h-screen flex px-20 py-20 gap-10">
        <div className="w-[25%] flex flex-col gap-6 sticky top-20 h-[calc(100vh-5rem)]">
          <div className="flex items-center gap-2">
            <h3>sort by</h3>
            <select className="border-[1px] px-2 py-1">
              <option value="popular">Popular</option>
              <option value="newest">Newest</option>
            </select>
          </div>

          <div className="flex flex-col mt-10 gap-2">
            <a className="block w-fit" href="#">
              New Collection
            </a>
            <a className="block w-fit" href="#">
              All Products
            </a>
            <a className="block w-fit" href="#">
              Discounted Products
            </a>
          </div>

          <div className="mt-10 flex flex-col gap-2">
            <a className="block w-fit" href="#">
              Filter by :
            </a>
            <a className="block w-fit" href="#">
              Availability
            </a>
            <a className="block w-fit" href="#">
              Discount
            </a>
          </div>
        </div>

        <div className="w-[75%] h-screen overflow-y-auto pr-5">
          <div className="grid grid-cols-3 gap-5">
            {products?.map((product) => (
              <div className="w-60" key={product._id}>
                {console.log(product._id)}
                <div
                  className="w-full h-52 flex items-center justify-center"
                  style={{ backgroundColor: product.bgcolor }}
                >
                  {product.image && (
                    <img
                      className="h-[12rem]"
                      src={`data:image/*;base64,${product.image}`}
                      alt={product.name}
                    />
                  )}
                </div>

                <div
                  className="flex justify-between items-center px-4 py-4"
                  style={{
                    backgroundColor: product.panelcolor,
                    color: product.textcolor,
                  }}
                >
                  <div>
                    <h3>{product.name}</h3>
                    <h4>₹ {product.price}</h4>
                  </div>

                  <button
                    onClick={() => addToCart(product._id)}
                    className="w-7 h-7 flex items-center justify-center rounded-full bg-white cursor-pointer"
                  >
                    <i className="ri-add-line"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
