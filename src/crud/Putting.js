import React, { useState } from "react";
import axios from "axios";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";

const Putting = (props) => {
  const [id, setId] = useState(props.user.id);
  const [userName, setUsername] = useState(props.user.userName);
  const [role, setRole] = useState(props.user.role);
  const [address, setAddress] = useState(props.user.address);
  const [phone, setPhone] = useState(props.user.phone);
  const [status, setStatus] = useState(props.user.status);
  const [error, setError] = useState("");
  const [showmodal, setShowModal] = useState(false);
  const api =
    "https://k4w98whhc5.execute-api.ap-southeast-1.amazonaws.com/Prod/api/users";

  const dbdata = {
    id: id,
    userName: userName,
    role: role,
    address: address,
    phone: phone,
    status: status,
  };

  function PreFillForm() {
    const item = props.user;
    console.log(item);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await axios({
        method: "put",
        url: `${api}/${id}`,
        data: dbdata,
        headers: { "Content-Type": "application/json" },
      });
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
    // clear form after submit
    setId("");
    setUsername("");
    setRole("");
    setAddress("");
    setPhone("");
    setStatus("");
    setShowModal(false);
  };

  return (
    <div>
      <button
        onClick={() => {
          setShowModal(true);
          PreFillForm();
        }}
        className="block text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none 
        focus:ring-yellow-300 
        font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-500 dark:hover:bg-yellow-500
         dark:focus:ring-yellow-600"
        type="button"
        data-modal-toggle="defaultModal"
      >
        Edit User
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
                  Edit User
                </span>
                <span class="block w-full text-xl uppercase font-bold mb-4">
                  Current User Id:{id}
                </span>

                <form onSubmit={handleSubmit}>
                  <div class="mb-6">
                    <label
                      class="block text-gray-700 text-sm font-bold mb-2"
                      for="username"
                    >
                      User Name
                    </label>
                    <input
                      class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 
              leading-tight 
              focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                      placeholder="User Name"
                      value={userName}
                      onChange={(e) => setUsername(e.target.value)}
                    ></input>
                  </div>
                  <div class="mb-6">
                    <label
                      class="block text-gray-700 text-sm font-bold mb-2"
                      for="role"
                    >
                      Role
                    </label>
                    <input
                      class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 
              leading-tight 
              focus:outline-none focus:shadow-outline"
                      id="role"
                      type="text"
                      placeholder="Role"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                    ></input>
                  </div>
                  <div class="mb-6">
                    <label
                      class="block text-gray-700 text-sm font-bold mb-2"
                      for="address"
                    >
                      Address
                    </label>
                    <input
                      class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 
              leading-tight 
              focus:outline-none focus:shadow-outline"
                      id="address"
                      type="text"
                      placeholder="Address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    ></input>
                  </div>
                  <div class="mb-6">
                    <label
                      class="block text-gray-700 text-sm font-bold mb-2"
                      for="phone"
                    >
                      Phone
                    </label>
                    <input
                      class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 
              leading-tight 
              focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                      placeholder="Phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    ></input>
                  </div>
                  <div class="mb-6">
                    <label
                      class="block text-gray-700 text-sm font-bold mb-2"
                      for="status"
                    >
                      Status
                    </label>
                    <input
                      class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 
              leading-tight 
              focus:outline-none focus:shadow-outline"
                      id="status"
                      type="text"
                      placeholder="Status"
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
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
              <div class="mt-2 px-7 py-3"></div>
              <div class="items-center px-4 py-3 flex"></div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Putting;
