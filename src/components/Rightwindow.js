import React, { useState, useEffect } from "react";
import axios from "axios";
const Rightwindow = (props) => {
  const sku = props.sku;
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:5000/api/products");
      setData(result.data);
    };

    fetchData();
  }, []);
  return (
    <>
      <h1 className="text-2xl">{props.sku}</h1>
      <div class="relative text-black top-[500px]">
        Other content goes here.
      </div>
    </>
  );
};

export default Rightwindow;
