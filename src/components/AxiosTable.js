import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import Table from "react-bootstrap/Table";
import Posting from "../crud/Posting";

export default function AxiosTable({ fixtures }) {
  const url =
    "https://k4w98whhc5.execute-api.ap-southeast-1.amazonaws.com/Prod/api/users";

  const [data, setData] = useState([]);

  const getData = () => {
    Axios.get(url).then((json) => setData(json.data));
  };
  useEffect(() => {
    getData();
  }, []);

  const renderTable = () => {
    return data.map((user) => {
      return (
        <tr>
          <td>{user.id}</td>
          <td>{user.userName}</td>
          <td>{user.role}</td>
          <td>{user.address}</td>
          <td>{user.phone}</td>
          <td>{user.status}</td>
          <td>
            <button className="  bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
              Edit
            </button>
          </td>
          <td>
            <button className="  bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };

  return (
    <div>
      <h1
        id="title"
        className="  text-white text-center md:text-6xl sm:text-5xl text-4xl font-bold md:py-6"
      >
        Api Table.
      </h1>
      <Posting />

      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th>ID</th>
            <th>User Name</th>
            <th>Role</th>
            <th>Adress</th>
            <th>Phone</th>
            <th>Status</th>

            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </Table>
    </div>
  );
}
