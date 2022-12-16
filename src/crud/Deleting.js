import React, { useState } from "react";
import axios from "axios";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";

const Deleting = (props) => {
  const [id, setId] = useState(props.user.id);

  const [error, setError] = useState("");
  const [showmodal, setShowModal] = useState(false);
  const api = "http://localhost:5000/api/users";

  const dbdata = {
    id: id,
  };

  function PreFillForm() {
    const item = props.user;
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
  };

  return (
    <div>
      <button
        onClick={() => {
          setShowModal(true);
          PreFillForm();
        }}
        className="block text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none 
        focus:ring-red-300 
        font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-500
         dark:focus:ring-red-600"
        type="button"
        data-modal-toggle="defaultModal"
      >
        Delete User
      </button>
      {showmodal ? (
        <div>
          <div
            class="fixed  inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
            id="my-modal"
          >
            <div class="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
              <div class="mt-3 text-center">
                <span class="block w-full text-xl uppercase font-bold mb-4">
                  Delete User
                </span>
                <span class="block w-full text-xl uppercase font-bold mb-4"></span>
                <p className="md:text-2xl text-xl font-bold ">
                  Are You sure you want to delete this user?
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
    </div>
  );
};

export default Deleting;
