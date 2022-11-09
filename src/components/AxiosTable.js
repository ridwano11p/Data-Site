import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";

export default function UserList() {
  const url =
    "https://1bferubrff.execute-api.ap-southeast-1.amazonaws.com/dev/userslist";

  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get(url).then((json) => setData(json.data));
  }, []);

  const renderTable = () => {
    return data.map((user) => {
      return (
        <tr>
          <td>{user.name}</td>
          <td>{user.email}</td>
        </tr>
      );
    });
  };

  return (
    <div>
      <h1 id="title">API Table</h1>
      <table id="users">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </table>
    </div>
  );
}
