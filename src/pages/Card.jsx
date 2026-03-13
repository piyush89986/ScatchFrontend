import React, { useEffect, useState } from "react";
import Header from "../components/Header";

export default function Cart() {
  const [user, setUser] = useState(null);
  const [bill, setBill] = useState(0);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/cart`, {
          method: "GET",
          credentials: "include",
        });
        const data = await res.json();
        if (data.success) {
          setUser(data.user);
          setBill(data.bill);
        }
      } catch (error) {
        console.error("Cart fetch error:", error);
      }
    };
    fetchCart();
  }, []);

  if (!user) {
    return <div className="p-10">Loading cart...</div>;
  }

  return (
    <>
      <Header />

      <div className="w-full min-h-screen flex flex-col items-center px-20 py-20 gap-10">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {user.card.map((item, index) => (
            <div
              key={index}
              className="rounded-md overflow-hidden border border-gray-200"
            >
              <div
                className="w-full h-40 flex items-center justify-center"
                style={{ backgroundColor: item.bgcolor }}
              >
                {item.image && (
                  <img
                    className="h-[10rem]"
                    src={`data:image/png;base64,${btoa(
                      String.fromCharCode(...item.image.data)
                    )}`}
                    alt={item.name}
                  />
                )}
              </div>

              <div
                className="w-full flex justify-between px-5 py-4"
                style={{
                  backgroundColor: item.panelcolor,
                  color: item.textcolor,
                }}
              >
                <h3 className="text-2xl">{item.name}</h3>

                <div className="flex items-center gap-2">
                  <i className="w-7 h-7 bg-white flex rounded-full items-center justify-center ri-add-line cursor-pointer"></i>

                  <div className="px-2 py-1 rounded-md bg-white text-black">
                    01
                  </div>

                  <i className="w-7 h-7 bg-white flex rounded-full items-center justify-center ri-subtract-line cursor-pointer"></i>
                </div>
              </div>

              <div
                className="flex items-center justify-between px-5 py-3 text-white"
                style={{ backgroundColor: item.textcolor }}
              >
                <h4 className="text-lg">Net Total</h4>
                <h2 className="text-lg">₹ {item.price - item.discount}</h2>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full mt-10 border-t border-black pt-5">
          <h3 className="text-2xl mb-5">Total Summary</h3>

          <div className="flex justify-between mb-2">
            <span>Total MRP</span>
            <span>₹ {user.card.reduce((sum, p) => sum + p.price, 0)}</span>
          </div>

          <div className="flex justify-between mb-2">
            <span>Discount on MRP</span>
            <span>₹ {user.card.reduce((sum, p) => sum + p.discount, 0)}</span>
          </div>

          <div className="flex justify-between mb-2">
            <span>Platform Fee</span>
            <span>₹ 20</span>
          </div>

          <div className="flex justify-between mb-2">
            <span>Shipping Fee</span>
            <span>FREE</span>
          </div>

          <div className="w-full h-[1px] bg-black my-5"></div>

          <div className="flex justify-between text-xl font-semibold text-green-600">
            <span>Total Amount</span>
            <span>₹ {bill}</span>
          </div>
        </div>
      </div>
    </>
  );
}
