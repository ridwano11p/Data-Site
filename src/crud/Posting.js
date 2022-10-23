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
  const data = {
    id: "",
    userName: "",
    role: "",
    address: "",
    phone: "",
    status: "",
  };
  const url =
    "https://k4w98whhc5.execute-api.ap-southeast-1.amazonaws.com/Prod/api/users";
  const PostData = (e) => {
    e.preventDefault();
    axios.post(url, data).then(console.log(data));
  };

  return (
    <div>
      <button onClick={PostData} className="bg-white text-black">
        Post
      </button>
    </div>
  );
};

export default Posting;
