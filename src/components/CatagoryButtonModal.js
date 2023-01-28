import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import axios from "axios";

const CatagoryButtonModal = () => {
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    sku: "",
    name: "",
    description: "",
    price: "",
    isAvailable: true,
    categoryId: "",
    unit: "",
    manufacturer: "",
    brand: "",
    sellingPrice: "",
    purchaseCost: "",
    tax: "",
    stocksOnHand: "",
    reOrderLevel: "",
  });

  const handleIsAvailable = (e) => {
    setFormData({
      ...formData,
      isAvailable: e.target.value === "true",
    });
  };

  const handleChange = (e) => {
    if (e.target.name === "isAvailable") {
      handleIsAvailable(e);
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };
  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/products",
        formData
      );
      console.log(res);
      setFormData({
        sku: "",
        name: "",
        description: "",
        price: "",
        isAvailable: true,
        categoryId: "",
        unit: "",
        manufacturer: "",
        brand: "",
        sellingPrice: "",
        purchaseCost: "",
        tax: "",
        stocksOnHand: "",
        reOrderLevel: "",
      });
      setShowModal(false);
      window.location.reload(); // this will reload the page
    } catch (err) {
      console.error(err);
      alert(
        "An error has occurred while creating the product, please try again later"
      );
    }
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
          <div className="modal-overlay"></div>
          <div className="modal-container">
            <div className="modal-header">
              <div className="form-container">
                <div className="form-row">
                  <div className="form-field">
                    <label className="form-label">SKU:</label>
                    <form onSubmit={submitForm}>
                      <div>
                        <input
                          type="text"
                          name="sku"
                          value={formData.sku}
                          onChange={handleChange}
                          className="form-input"
                        />
                      </div>
                    </form>
                  </div>
                  <div className="form-field">
                    <label className="form-label">Name:</label>
                    <form onSubmit={submitForm}>
                      <div>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="form-input"
                        />
                      </div>
                    </form>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-field">
                    <label className="form-label">Description:</label>
                    <form onSubmit={submitForm}>
                      <div>
                        <input
                          type="text"
                          name="description"
                          value={formData.description}
                          onChange={handleChange}
                          className="form-input"
                        />
                      </div>
                    </form>
                  </div>

                  <div className="form-field">
                    <label className="form-label">Price:</label>
                    <form onSubmit={submitForm}>
                      <div>
                        <input
                          type="text"
                          name="price"
                          value={formData.price}
                          onChange={handleChange}
                          className="form-input"
                        />
                      </div>
                    </form>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-field">
                    <label className="form-label">Unit:</label>
                    <form onSubmit={submitForm}>
                      <div>
                        <input
                          type="text"
                          name="unit"
                          value={formData.unit}
                          onChange={handleChange}
                          className="form-input"
                        />
                      </div>
                    </form>
                  </div>
                  <div className="form-field">
                    <label className="form-label">Manufacturer:</label>
                    <form onSubmit={submitForm}>
                      <div>
                        <input
                          type="text"
                          name="manufacturer"
                          value={formData.manufacturer}
                          onChange={handleChange}
                          className="form-input"
                        />
                      </div>
                    </form>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-field">
                    <label className="form-label">Brand:</label>
                    <form onSubmit={submitForm}>
                      <div>
                        <input
                          type="text"
                          name="brand"
                          value={formData.brand}
                          onChange={handleChange}
                          className="form-input"
                        />
                      </div>
                    </form>
                  </div>
                  <div className="form-field">
                    <label className="form-label">Selling Price:</label>
                    <form onSubmit={submitForm}>
                      <div>
                        <input
                          type="text"
                          name="sellingPrice"
                          value={formData.sellingPrice}
                          onChange={handleChange}
                          className="form-input"
                        />
                      </div>
                    </form>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-field">
                    <label className="form-label">Purchase Cost:</label>
                    <form onSubmit={submitForm}>
                      <div>
                        <input
                          type="text"
                          name="purchaseCost"
                          value={formData.purchaseCost}
                          onChange={handleChange}
                          className="form-input"
                        />
                      </div>
                    </form>
                  </div>
                  <div className="form-field">
                    <label className="form-label">Tax:</label>
                    <form onSubmit={submitForm}>
                      <div>
                        <input
                          type="text"
                          name="tax"
                          value={formData.tax}
                          onChange={handleChange}
                          className="form-input"
                        />
                      </div>
                    </form>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-field">
                    <label className="form-label">Stocks on Hand:</label>
                    <form onSubmit={submitForm}>
                      <div>
                        <input
                          type="text"
                          name="stocksOnHand"
                          value={formData.stocksOnHand}
                          onChange={handleChange}
                          className="form-input"
                        />
                      </div>
                    </form>
                  </div>
                  <div className="form-field">
                    <label className="form-label">Re-Order Level:</label>
                    <form onSubmit={submitForm}>
                      <div>
                        <input
                          type="text"
                          name="reOrderLevel"
                          value={formData.reOrderLevel}
                          onChange={handleChange}
                          className="form-input"
                        />
                      </div>
                    </form>
                  </div>
                  <div className="form-field">
                    <label className="form-label">Category ID:</label>
                    <form onSubmit={submitForm}>
                      <div>
                        <input
                          type="text"
                          name="categoryId"
                          value={formData.categoryId}
                          onChange={handleChange}
                          className="form-input"
                        />
                      </div>
                    </form>
                  </div>
                  <div className="form-field">
                    <label className="form-label">Availability:</label>
                    <form onSubmit={submitForm}>
                      <div>
                        <select
                          name="isAvailable"
                          value={formData.isAvailable ? "true" : "false"}
                          onChange={handleChange}
                          className="form-input"
                        >
                          <option value="true">Available</option>
                          <option value="false">Not Available</option>
                        </select>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="lastbuttons">
                  <button
                    type="button"
                    className="submitbutton"
                    onClick={submitForm}
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    className="closebutton"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default CatagoryButtonModal;
