import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
const Rightmodal = ({ sku }) => {
  const [productData, setProductData] = useState({});

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("http://localhost:5000/api/products");
      setProductData(response.data);
    };
    getData();
  }, []);

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const addProduct = async (e) => {
    e.preventDefault();
    const newProduct = {
      name,
      description,
      sku,
    };
    const response = await axios.post(
      "http://localhost:5000/api/products",
      newProduct
    );
    setProductData(response);
  };
  return (
    <>
      <button
        className="ml-5 bg-blue-400 text-white active:bg-pink-600 font-bold uppercase 
        text-sm px-3 py-1 rounded shadow hover:shadow-lg outline-none 
        focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Add Item
      </button>
      {showModal ? (
        <>
          <div id="rightmodal">
            <div id="modal-content">
              <div>
                <form onSubmit={addProduct}>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={onNameChange}
                    placeholder="Enter name"
                  />
                  <input
                    type="text"
                    name="description"
                    value={description}
                    onChange={onDescriptionChange}
                    placeholder="Enter description"
                  />
                  <button
                    type="submit"
                    onClick={() => {
                      addProduct();
                      window.location.reload();
                    }}
                  >
                    Add Product
                  </button>
                </form>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Rightmodal;
