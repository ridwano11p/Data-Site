import { React, useState, useEffect } from "react";
import axios from "axios";

const RightwindowSelect = (props) => {
  const [id, setId] = useState(props.item.id);
  const [sku, setName] = useState(props.item.sku);
  const [error, setError] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [showmodal, setShowModal] = useState(false);
  const api = "http://localhost:5000/api/products";

  const dbdata = {
    id: id,
  };
  const options = ["Option 1", "Option 2", "Option 3", "Delete Item"];
  function PreFillForm() {
    const item = props.item;
    console.log(item);
  }

  const handleSubmit = async (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    setError("");
    try {
      await axios({
        method: "delete",
        url: `${api}/${id}`,
        data: dbdata,
        headers: { "Content-Type": "application/json" },
      });
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
    // close modal  after submit

    setShowModal(false);
    window.location.reload();
  };
  const handleSelectChange = (e) => {
    if (e.target.value === "delete") {
      setShowModal(true);
      PreFillForm();
    }
  };

  return (
    <>
      <div class=" ml-5 border-2 border-gray-300 relative">
        <select
          class="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-300 px-4 py-2 pr-8 
      rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          onChange={handleSelectChange}
        >
          <option>More</option>
          <option value="delete">Delete item</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            class="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
      {showmodal ? (
        <div>
          <div
            class="fixed  inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
            id="my-modal"
          >
            <div class="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
              <div class="mt-3 text-center">
                <span class="block w-full text-xl uppercase font-bold mb-4">
                  Delete Item.
                </span>
                <span class="block w-full text-xl uppercase font-bold mb-4">
                  {sku}
                </span>

                <span class="block w-full text-xl uppercase font-bold mb-4"></span>
                <p className="md:text-2xl text-xl font-bold ">
                  Are You sure you want to delete this item?
                </p>
              </div>

              <div class="mt-2 px-7 py-3"></div>
              <div class="items-center px-4 py-3 flex"></div>
              <div>
                {" "}
                <div className="flex space-x-10">
                  <button
                    onClick={() => {
                      handleSubmit();
                      setShowModal(false);
                    }}
                    class="text-white bg-green-600 hover:bg-green-800 focus:ring-4 
                  focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium 
                  rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => {
                      setShowModal(false);
                    }}
                    class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 
                  focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium 
                  rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default RightwindowSelect;
