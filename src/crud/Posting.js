import React, { useState } from "react";
import axios from "axios";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";

const Posting = () => {
  const [id, setId] = useState("");
  const [userName, setUsername] = useState("");
  const [role, setRole] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await axios({
        method: "post",
        url: api,
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
  };

  return (
    <div>
      <div class="w-full max-w-xs">
        <form
          onSubmit={handleSubmit}
          class="bg-white shadow-md rounded px-8 pt-6 
          pb-8
         mb-4"
        >
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="id">
              Id
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 
              leading-tight 
              focus:outline-none focus:shadow-outline"
              id="id"
              type="number"
              placeholder="Id"
              value={id}
              onChange={(e) => setId(e.target.value)}
            ></input>
          </div>
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
          <div class="flex items-center justify-between">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none 
              focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Posting;