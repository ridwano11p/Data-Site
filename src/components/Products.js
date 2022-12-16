import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import ReactDOM from "react-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  // State for the product form
  const [productForm, setProductForm] = useState({
    sku: "",
    name: "",
    description: "",
    price: "",
    isAvailable: true,
    categoryId: "",
  });

  // State to track whether the form is in add or edit mode
  const [formMode, setFormMode] = useState("add");

  useEffect(() => {
    // Fetch products from API
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);
  //function to change the imput onclick.

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProductForm((prevProductForm) => ({
      ...prevProductForm,
      [name]: value,
    }));
  };
  // handles submiting the form.
  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Add the product
    if (formMode === "add") {
      axios
        .post("http://localhost:5000/api/products", productForm)
        .then((res) => {
          setProducts([...products, res.data]);
          resetForm(); // call the resetForm function here
        })
        .catch((err) => console.error(err));
    } else if (formMode === "edit") {
      // Update the product
      axios
        .put(
          `http://localhost:5000/api/products/${productForm.id}`,
          productForm
        )
        .then((res) => {
          const updatedProducts = products.map((product) =>
            product.id === res.data.id ? res.data : product
          );
          setProducts(updatedProducts);
          resetForm(); // call the resetForm function here
          setFormMode("add");
        })
        .catch((err) => console.log(err));
    }
  };

  const handleEditClick = (product) => {
    setProductForm({ ...product, isAvailable: product.isAvailable });
    setFormMode("edit");
  };

  const handleDeleteClick = (productId) => {
    axios
      .delete(`http://localhost:5000/api/products/${productId}`)
      .then((res) => {
        const updatedProducts = products.filter(
          (product) => product.id !== productId
        );
        setProducts(updatedProducts);
      })
      .catch((err) => console.error(err));
  };

  const resetForm = () => {
    setProductForm({
      sku: "",
      name: "",
      description: "",
      price: "",
      isAvailable: true,
      categoryId: "",
    });
  };
  // Availability /checkbox functions.
  const handleAvailabilityClick = (product) => {
    // Update the product's availability
    const updatedProduct = { ...product, isAvailable: !product.isAvailable };
    axios
      .put(`http://localhost:5000/api/products/${product.id}`, updatedProduct)
      .then((res) => {
        // Update the products state with the updated product
        const updatedProducts = products.map((p) =>
          p.id === product.id ? updatedProduct : p
        );
        setProducts(updatedProducts);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <NavBar />
      <br></br>
      {/* Add/edit product form */}

      <div className="w-full mb-4 flex flex-col md:flex-row">
        <form
          onSubmit={handleFormSubmit}
          className="w-full md:w-1/2 md:mr-4 bg-gray-800 text-yellow-300 rounded p-4"
        >
          <div className="flex mb-4">
            <label
              htmlFor="sku"
              className="w-1/3 font-bold text-gray-300 text-sm mr-2"
            >
              Catagory Name
            </label>
            <input
              type="text"
              id="sku"
              name="sku"
              value={productForm.sku}
              onChange={handleInputChange}
              className="w-2/3 p-2 rounded bg-gray-700 text-yellow-300"
            />
          </div>
          <div className="flex mb-4">
            <label
              htmlFor="name"
              className="w-1/3 font-bold text-gray-300 text-sm mr-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={productForm.name}
              onChange={handleInputChange}
              className="w-2/3 p-2 rounded bg-gray-700 text-yellow-300"
            />
          </div>
          <div className="flex mb-4">
            <label
              htmlFor="description"
              className="w-1/3 font-bold text-gray-300 text-sm mr-2"
            >
              Description
            </label>
            <input
              type="text"
              id="description"
              name="description"
              value={productForm.description}
              onChange={handleInputChange}
              className="w-2/3 p-2 rounded bg-gray-700 text-yellow-300"
            />
          </div>
          <div className="flex mb-4">
            <label
              htmlFor="price"
              className="w-1/3 font-bold text-gray-300 text-sm mr-2"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={productForm.price}
              onChange={handleInputChange}
              className="w-2/3 p-2 rounded bg-gray-700 text-yellow-300"
            />
          </div>

          <div className="flex mb-4">
            <label
              htmlFor="categoryId"
              className="w-1/3 font-bold text-gray-300 text-sm mr-2"
            >
              Category ID
            </label>
            <input
              type="text"
              id="categoryId"
              name="categoryId"
              value={productForm.categoryId}
              onChange={handleInputChange}
              className="w-2/3 p-2 rounded bg-gray-700 text-yellow-300"
            />
          </div>

          <div className="flex">
            {formMode === "add" ? (
              <button
                //reset the page upon adding to api.
                onClick={() => window.location.reload()}
                className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Add Product
              </button>
            ) : (
              <button
                className="w-full bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Edit Product
              </button>
            )}
          </div>
        </form>
      </div>
      <table className="table-auto text-left w-full mt-4 bg-gray-800 text-yellow-300">
        <thead>
          <tr>
            <th className="px-4 py-2">Catagory Name</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2  md:w-1/3">Price</th>

            <th className="px-4 py-2">Category ID</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="border px-4 py-2 md:w-1/3">{product.sku}</td>
              <td className="border px-4 py-2 md:w-1/3">{product.name}</td>
              <td className="border px-4 py-2 md:w-2/3">
                {product.description}
              </td>
              <td className="border px-4 py-2 md:w-1/3">{product.price}</td>

              <td className="border px-4 py-2 md:w-1/3">
                {product.categoryId}
              </td>
              <td className="border px-4 py-2 md:w-1/3">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 md:px-6 rounded"
                  onClick={() => handleEditClick(product)}
                >
                  Edit
                </button>
              </td>
              <td className="border px-4 py-2 md:w-1/3">
                {product.isAvailable ? (
                  <button
                    className="px-4 py-2 rounded-full bg-green-500 text-white"
                    onClick={() => handleAvailabilityClick(product)}
                  >
                    Available
                  </button>
                ) : (
                  <button
                    className="px-4 py-2 rounded-full bg-red-500 text-white"
                    onClick={() => handleAvailabilityClick(product)}
                  >
                    Unavailable
                  </button>
                )}
              </td>

              <td className="border px-4 py-2 md:w-1/3">
                <button
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 md:px-6 rounded"
                  onClick={() => handleDeleteClick(product.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Products;
