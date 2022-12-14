import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import Table from "react-bootstrap/Table";
import Posting from "../crud/Posting";
import Putting from "../crud/Putting";
import Deleting from "../crud/Deleting";

export default function AxiosTable({ fixtures }) {
  const url = url;
  const [data, setData] = useState([]);

  const getData = (e) => {
    Axios.get(url).then((json) => setData(json.data));
  };
  useEffect(() => {
    getData();
  }, [data]);

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
          <td>{<Putting user={user} />}</td>
          <td>{<Deleting user={user} />}</td>
        </tr>
      );
    });
  };

  return (
    <div>
      <h1
        id="title"
        className="  text-black text-center md:text-6xl sm:text-5xl text-4xl font-bold md:py-6"
      >
        Api Table.
      </h1>
      <Posting />

      <Table responsive striped bordered hover variant="light">
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
