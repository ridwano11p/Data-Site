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

  const [tax, setTax] = useState(props.item.tax);
  const [stocksOnHand, setStocksOnHand] = useState(props.item.stocksOnHand);
  const [reOrderLevel, setReOrderLevel] = useState(props.item.reOrderLevel);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState("");

  const dbdata = {
    id: id,
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
    setPrice("");
    setIsAvailable("");
    setCategoryId("");
    setUnit("");
    setManufacturer("");
    setBrand("");
    setSellingPrice("");
    setStocksOnHand("");
    setReOrderLevel("");

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
                <form onSubmit={handleSubmit} className="editform">
                  <div class="inputcontainer">
                    <label class="inputlabel" for="catagoryname">
                      Catagory name
                    </label>
                    <input
                      class="inputstyle"
                      id="catagoryname"
                      type="text"
                      value={sku}
                      onChange={(e) => setSku(e.target.value)}
                    ></input>
                  </div>
                  <div class="inputcontainer">
                    <label class="inputlabel" for="username">
                      Product name
                    </label>
                    <input
                      class="inputstyle"
                      id="productname"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    ></input>
                  </div>
                  <div class="inputcontainer">
                    <label class="inputlabel" for="username">
                      Product description
                    </label>
                    <input
                      class="inputstyle"
                      id="productdescription."
                      type="text"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    ></input>
                  </div>
                  <div class="inputcontainer">
                    <label class="inputlabel" for="username">
                      Price
                    </label>
                    <input
                      class="inputstyle"
                      id="price"
                      type="number"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    ></input>
                  </div>
                  <div class="inputcontainer">
                    <label class="inputlabel" for="username">
                      IsAvailable
                    </label>
                    <input
                      class="inputstyle"
                      id="isavailable"
                      type="checkbox"
                      value={isAvailable}
                      onChange={(e) => setIsAvailable(e.target.value)}
                    ></input>
                  </div>
                  <div class="inputcontainer">
                    <label class="inputlabel" for="username">
                      CategoryId
                    </label>
                    <input
                      class="inputstyle"
                      id="categoryid"
                      type="number"
                      value={categoryId}
                      onChange={(e) => setCategoryId(e.target.value)}
                    ></input>
                  </div>
                  <div class="inputcontainer">
                    <label class="inputlabel" for="username">
                      Unit
                    </label>
                    <input
                      class="inputstyle"
                      id="unit"
                      type="text"
                      value={unit}
                      onChange={(e) => setUnit(e.target.value)}
                    ></input>
                  </div>
                  <div class="inputcontainer">
                    <label class="inputlabel" for="username">
                      Manufacturer
                    </label>
                    <input
                      class="inputstyle"
                      id="manufacturer"
                      type="text"
                      value={manufacturer}
                      onChange={(e) => setManufacturer(e.target.value)}
                    ></input>
                  </div>
                  <div class="inputcontainer">
                    <label class="inputlabel" for="username">
                      Brand
                    </label>
                    <input
                      class="inputstyle"
                      id="brand"
                      type="text"
                      value={brand}
                      onChange={(e) => setBrand(e.target.value)}
                    ></input>
                  </div>

                  <div class="inputcontainer">
                    <label class="inputlabel" for="username">
                      Selling Price
                    </label>
                    <input
                      class="inputstyle"
                      id="sellingprice"
                      type="text"
                      value={sellingPrice}
                      onChange={(e) => setSellingPrice(e.target.value)}
                    ></input>
                  </div>

                  <div class="inputcontainer">
                    <label class="inputlabel" for="username">
                      Tax
                    </label>
                    <input
                      class="inputstyle"
                      id="tax"
                      type="text"
                      value={tax}
                      onChange={(e) => setTax(e.target.value)}
                    ></input>
                  </div>
                  <div class="inputcontainer">
                    <label class="inputlabel" for="username">
                      Stock on hand.
                    </label>
                    <input
                      class="inputstyle"
                      id="stockonhand"
                      type="text"
                      value={stocksOnHand}
                      onChange={(e) => setStocksOnHand(e.target.value)}
                    ></input>
                  </div>
                  <div class="inputcontainer">
                    <label class="inputlabel" for="username">
                      Reorder Level
                    </label>
                    <input
                      class="inputstyle"
                      id="username"
                      type="text"
                      value={reOrderLevel}
                      onChange={(e) => setReOrderLevel(e.target.value)}
                    ></input>
                  </div>
                  <div className="rightaddbuttoncontainer ">
                    <button className="additem" type="submit">
                      Submit
                    </button>
                    <button
                      onClick={() => {
                        setShowModal(false);
                      }}
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

export default RightwindowEdit;
