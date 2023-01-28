import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import { BiPencil } from "react-icons/bi";

const RightwindowEdit = (props) => {
  const [id, setId] = useState(props.item.id);
  const [sku, setSku] = useState(props.item.sku);
  const [name, setName] = useState(props.item.name);
  const [description, setDescription] = useState(props.item.description);
  const [price, setPrice] = useState(props.item.price);
  const [isAvailable, setIsAvailable] = useState(props.item.isAvailable);
  const [categoryId, setCategoryId] = useState(props.item.categoryId);
  const [unit, setUnit] = useState(props.item.unit);
  const [manufacturer, setManufacturer] = useState(props.item.manufacturer);
  const [brand, setBrand] = useState(props.item.brand);
  const [sellingPrice, setSellingPrice] = useState(props.item.sellingPrice);
  const [purchaseCost, setPurchaseCost] = useState(props.item.purchaseCost);
  const [tax, setTax] = useState("");
  const [stocksOnHand, setStocksOnHand] = useState("");
  const [reOrderLevel, setReOrderLevel] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState("");

  const dbdata = {
    id: id,
    sku: sku,
    name: name,
    description: description,
  };

  function PreFillForm() {
    const item = props.item;
    console.log(item);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await axios({
        method: "put",
        url: `http://localhost:5000/api/products/${id}`,
        data: dbdata,
        headers: { "Content-Type": "application/json" },
      });
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
    // clear form after submit
    setId("");
    setSku("");
    setName("");
    setDescription("");

    setShowModal(false);
    window.location.reload();
  };

  return (
    <>
      <button
        class="bg-white px-2 py-1 text-black border border-gray-800 rounded-none "
        type="button"
        onClick={() => {
          setShowModal(true);
          PreFillForm();
        }}
      >
        <BiPencil />
      </button>
      {showModal ? (
        <>
          <div id="rightmodal">
            <div id="modal-content">
              <div>
                <form onSubmit={handleSubmit}>
                  <div class="mb-6">
                    <label
                      class="block text-gray-700 text-sm font-bold mb-2"
                      for="username"
                    >
                      catagory name
                    </label>
                    <input
                      class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 
              leading-tight 
              focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                      placeholder="User Name"
                      value={sku}
                      onChange={(e) => setSku(e.target.value)}
                    ></input>
                  </div>
                  <div class="mb-6">
                    <label
                      class="block text-gray-700 text-sm font-bold mb-2"
                      for="username"
                    >
                      product name
                    </label>
                    <input
                      class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 
              leading-tight 
              focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                      placeholder="User Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    ></input>
                  </div>
                  <div class="mb-6">
                    <label
                      class="block text-gray-700 text-sm font-bold mb-2"
                      for="username"
                    >
                      product description
                    </label>
                    <input
                      class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 
              leading-tight 
              focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                      placeholder="User Name"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    ></input>
                  </div>
                  <div className="flex space-x-4 ">
                    <button
                      class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none 
              focus:shadow-outline"
                      type="submit"
                    >
                      Submit
                    </button>
                    <button
                      onClick={() => {
                        setShowModal(false);
                      }}
                      class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none 
              focus:shadow-outline"
                      type="button"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default RightwindowEdit;
