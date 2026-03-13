import { useState } from "react";
import Header from "../components/Header";

const CreateProduct = () => {
  const [success, setSuccess] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    discount: "",
    bgcolor: "",
    panelcolor: "",
    textcolor: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔗 Backend API integration later
    const payload = new FormData();
    Object.entries(formData).forEach(([key, value]) =>
      payload.append(key, value)
    );

    console.log("Create Product Payload:", Object.fromEntries(payload));

    // Example success message
    setSuccess("Product created successfully!");
  };

  return (
    <>
      <Header />

      {/* Success Message */}
      {success && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 bg-blue-500 px-4 py-2 rounded text-white z-50">
          {success}
        </div>
      )}

      <div className="min-h-screen flex flex-col pt-20">
        <div className="container px-10 py-20 flex flex-grow">

          {/* Sidebar */}
          <div className="w-1/4 flex flex-col">
            <a className="mb-2 cursor-pointer">All Products</a>
            <a className="mb-2 cursor-pointer font-semibold">
              Create new product
            </a>
          </div>

          {/* Main Form */}
          <main className="w-3/4 bg-white p-8 shadow ml-4">
            <h2 className="text-xl font-bold mb-4">Create New Product</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Product Details */}
              <div>
                <h3 className="text-lg font-semibold mb-2">Product Details</h3>

                <div className="mb-4">
                  <label className="block mb-2 font-medium">
                    Product Image
                  </label>
                  <input
                    type="file"
                    name="image"
                    onChange={handleChange}
                    className="py-2"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <input
                    name="name"
                    placeholder="Product Name"
                    className="border p-2 rounded"
                    onChange={handleChange}
                    required
                  />
                  <input
                    name="price"
                    placeholder="Product Price"
                    className="border p-2 rounded"
                    onChange={handleChange}
                    required
                  />
                  <input
                    name="discount"
                    placeholder="Discount Price"
                    className="border p-2 rounded"
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Panel Details */}
              <div>
                <h3 className="text-lg font-semibold mb-2">Panel Details</h3>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    name="bgcolor"
                    placeholder="Background Color"
                    className="border p-2 rounded"
                    onChange={handleChange}
                  />
                  <input
                    name="panelcolor"
                    placeholder="Panel Color"
                    className="border p-2 rounded"
                    onChange={handleChange}
                  />
                  <input
                    name="textcolor"
                    placeholder="Text Color"
                    className="border p-2 rounded"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="px-5 py-2 rounded bg-blue-500 text-white"
              >
                Create New Product
              </button>
            </form>
          </main>
        </div>
      </div>
    </>
  );
};

export default CreateProduct;
