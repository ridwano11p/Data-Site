import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import axios from "axios";

const CatagoryButtonModal = () => {
  const [sku, setSku] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [isAvailable, setIsAvailable] = useState(true);
  const [categoryId, setCategoryId] = useState("");
  const [unit, setUnit] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [brand, setBrand] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");

  const [tax, setTax] = useState("");
  const [stocksOnHand, setStocksOnHand] = useState("");
  const [reOrderLevel, setReOrderLevel] = useState("");
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const url = "http://localhost:5000/api/products";

  const productData = {
    sku: sku,
    name: name,
    description: description,
    price: price,
    isAvailable: isAvailable,
    categoryId: categoryId,
    unit: unit,
    manufacturer: manufacturer,
    brand: brand,
    sellingPrice: sellingPrice,

    tax: tax,
    stocksOnHand: stocksOnHand,
    reOrderLevel: reOrderLevel,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await axios({
        method: "post",
        url: url,
        data: productData,
        headers: { "Content-Type": "application/json" },
      });
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
    setSku("");
    setName("");
    setDescription("");
    setPrice("");
    setIsAvailable(true);
    setCategoryId("");
    setUnit("");
    setManufacturer("");
    setBrand("");
    setSellingPrice("");

    setTax("");
    setStocksOnHand("");
    setReOrderLevel("");
    setShowModal(false);
    window.location.reload();
  };
  const handleIsAvailable = (event) => {
    setIsAvailable(event.target.checked);
  };

  return (
    <>
      <button
        type="button"
        className="showmodalbutton"
        onClick={() => setShowModal(true)}
      >
        <AiOutlinePlus color="white" size={20} />
        <span className="ml-2">New</span>
      </button>
      {showModal ? (
        <>
          <div id="rightmodal">
            <div id="modal-content">
              <div>
                <form onSubmit={handleSubmit}>
                  <div class="input-grid">
                    <div className="input-div">
                      <label className="input-label">SKU</label>
                      <input
                        className="input-field"
                        type="text"
                        value={sku}
                        onChange={(e) => setSku(e.target.value)}
                      />
                    </div>
                    <div className="input-div">
                      <label className="input-label">Name</label>
                      <input
                        className="input-field"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="input-div">
                      <label className="input-label">Description</label>
                      <input
                        className="input-field"
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </div>
                    <div className="input-div">
                      <label className="input-label">Price</label>
                      <input
                        className="input-field"
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                      />
                    </div>
                    <div className="input-div">
                      <label className="input-label">Is Available</label>
                      <input
                        className="checkbox-field"
                        type="checkbox"
                        checked={isAvailable}
                        onChange={handleIsAvailable}
                      />
                    </div>
                    <div className="input-div">
                      <label className="input-label">Category ID</label>
                      <input
                        className="input-field"
                        type="number"
                        value={categoryId}
                        onChange={(e) => setCategoryId(e.target.value)}
                      />
                    </div>
                    <div className="input-div">
                      <label className="input-label">Unit</label>
                      <input
                        className="input-field"
                        type="text"
                        value={unit}
                        onChange={(e) => setUnit(e.target.value)}
                      />
                    </div>
                    <div className="input-div">
                      <label className="input-label">Manufacturer</label>
                      <input
                        className="input-field"
                        type="text"
                        value={manufacturer}
                        onChange={(e) => setManufacturer(e.target.value)}
                      />
                    </div>
                    <div className="input-div">
                      <label className="input-label">Brand</label>
                      <input
                        className="input-field"
                        type="text"
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                      />
                    </div>
                    <div className="input-div">
                      <label className="input-label">Selling Price</label>
                      <input
                        className="input-field"
                        type="number"
                        value={sellingPrice}
                        onChange={(e) => setSellingPrice(e.target.value)}
                      ></input>
                    </div>

                    <div className="input-div">
                      <label className="input-label">Tax</label>
                      <input
                        className="input-field"
                        type="number"
                        value={tax}
                        onChange={(e) => setTax(e.target.value)}
                      />
                    </div>
                    <div className="input-div">
                      <label className="input-label">Stocks on Hand</label>
                      <input
                        className="input-field"
                        type="number"
                        value={stocksOnHand}
                        onChange={(e) => setStocksOnHand(e.target.value)}
                      />
                    </div>
                    <div className="input-div">
                      <label className="input-label">Re-Order Level</label>
                      <input
                        className="input-field"
                        type="number"
                        value={reOrderLevel}
                        onChange={(e) => setReOrderLevel(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="rightaddbuttoncontainer">
                    <button className="additem" type="submit">
                      Submit
                    </button>
                    <button
                      onClick={() => setShowModal(false)}
                      class="canceladditem"
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

export default CatagoryButtonModal;
