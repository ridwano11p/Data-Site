import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, ul } from "react-router-dom";

const ProductList = (props) => {
  const [mode, setMode] = useState("all");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [visible, setVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/products").then((response) => {
      setProducts(response.data);
      setFilteredProducts(response.data);
    });
  }, []);

  useEffect(() => {
    setFilteredProducts(filterProducts(products, mode));
  }, [products, mode]);

  const filterProducts = (products, mode) => {
    if (mode === "all") {
      return products;
    } else if (mode === "true") {
      return products.filter((product) => product.isAvailable === true);
    } else if (mode === "false") {
      return products.filter((product) => product.isAvailable === false);
    }
  };

  const handleChange = (event) => {
    setMode(event.target.value);
  };

  const toggleSubmenu = (sku) => {
    setSelectedCategory(selectedCategory === sku ? "" : sku);
  };

  const groupedProducts = filteredProducts.reduce((groups, product) => {
    if (!groups[product.sku]) {
      groups[product.sku] = [];
    }
    groups[product.sku].push(product);
    return groups;
  }, {});

  return (
    <div className="w-full max-w-2xl mx-auto py-8 px-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Products</h2>
        <select
          className="bg-white rounded-md border border-gray-400 px-4 py-2 leading-5 font-medium text-gray-700"
          value={mode}
          onChange={handleChange}
        >
          <option value="all">All</option>
          <option value="true">True</option>
          <option value="false">False</option>
        </select>
      </div>
      {Object.keys(groupedProducts).map((sku) => (
        <ul key={sku} className="bg-white rounded-md shadow-md overflow-hidden">
          <li
            className="border-b border-gray-300 p-4 font-bold text-lg text-gray-800"
            onClick={() => toggleSubmenu(sku)}
          >
            {sku}
          </li>
          {selectedCategory === sku &&
            groupedProducts[sku].map((product) => (
              <li
                key={product.id}
                className="border-b border-gray-300 p-4 flex items-center text-blue-400"
              >
                <Link
                  to={`/products/${product.id}`}
                  className="text-lg font-bold hover:text-blue-400"
                >
                  {product.name}
                </Link>
              </li>
            ))}
        </ul>
      ))}
    </div>
  );
};

export default ProductList;
