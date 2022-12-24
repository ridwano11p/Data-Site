import React, { useState, useEffect } from "react";
import axios from "axios";
import { BsFolder2 } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import Dashboard from "./Dashboard";
import Rightwindow from "./Rightwindow";

const ProductList = () => {
  const [mode, setMode] = useState("all");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [showRightWindow, setShowRightWindow] = useState(false);

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

  const handleCheckboxChange = (event) => {
    const newProducts = products.map((product) => {
      if (product.sku === event.target.value) {
        return {
          ...product,
          isAvailable: !product.isAvailable,
        };
      }
      return product;
    });
    setProducts(newProducts);
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
    <>
      <div class="flex h-screen">
        <Dashboard />
        <div
          class="bg-white w-1/3 h-screen border-r-2 border-gray-500"
          name="middlewindow"
        >
          <div className="" name="listwindow">
            <div className="flex left-0">
              <select
                className="flex bg-white rounded-md border border-gray-400 px-4 py-2 leading-5 font-medium
                text-gray-700 flex-shrink-0"
                value={mode}
                onChange={handleChange}
              >
                <option value="all">All Items</option>
                <option value="true">Active Item Group</option>
                <option value="false">Inactive Item Group</option>
              </select>
              <button className="ml-5 bg-blue-400  text-white p-2 flex items-center flex-shrink-0">
                <AiOutlinePlus color="white" size={20} />
                <span className="ml-2">New</span>
              </button>
              <div class="ml-5 border  border-gray-400 rounded-md w-[60px] flex-shrink-0">
                <GiHamburgerMenu className="ml-3 h-10" size={30} />
              </div>
            </div>

            <div className="overflow-y-scroll h-screen">
              {Object.keys(groupedProducts).map((sku) => (
                <ul
                  key={sku}
                  className="bg-white rounded-md shadow-md overflow-y-scroll"
                >
                  <li
                    className={`flex items-center p-4 cursor-pointer hover:bg-gray-200 ${
                      selectedCategory === sku ? "text-black" : "text-blue-600"
                    }`}
                    onClick={() => {
                      toggleSubmenu(sku);
                      setShowRightWindow(true);
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <input type="checkbox" />
                      <BsFolder2
                        className="ml-5  pointer-events-none "
                        color="gray"
                        size={20}
                      />
                    </div>
                    <span className="ml-3 font-semibold text-md">{sku}</span>
                    <span className="ml-auto text-sm font-medium text-gray-600">
                      {groupedProducts[sku].length}
                    </span>
                  </li>
                  {selectedCategory === sku && (
                    <div className="ml-12">
                      {groupedProducts[sku].map((product) => (
                        <li
                          key={product.id}
                          className="p-4 flex items-center text-blue-600"
                        >
                          <span className="ml-3 font-semibold text-md">
                            {product.name}
                          </span>
                        </li>
                      ))}
                    </div>
                  )}
                </ul>
              ))}
            </div>
          </div>
        </div>
        {showRightWindow && (
          <div class="bg-white w-2/3 h-screen right-0" name="rightwindow">
            <button
              className="absolute  right-0 m-4 top-[60px] bg-white text-black text-2xl p-2 rounded-full"
              onClick={() => setShowRightWindow(false)}
            >
              <span className="text-3xl">&times;</span>
            </button>

            <Rightwindow sku={selectedCategory} />
          </div>
        )}
      </div>
    </>
  );
};

export default ProductList;
