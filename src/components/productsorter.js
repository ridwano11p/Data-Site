import React, { useState, useEffect } from "react";
import axios from "axios";
import { BsFolder2 } from "react-icons/bs";

import { GiHamburgerMenu } from "react-icons/gi";
import DashBoard from "./Dashboard";
import Rightwindow from "./Rightwindow";
import CatagoryButtonModal from "./CatagoryButtonModal";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { CSSTransition } from "react-transition-group";

const ProductList = () => {
  //controll the mode of the list. default set to all.
  const [mode, setMode] = useState("all");
  //a state to contain all the data from the api.
  const [products, setProducts] = useState([]);
  //a state that shows which data should be displayed base on mode
  const [filteredProducts, setFilteredProducts] = useState([]);
  //a state that tracks the selected catagory in the list
  const [selectedCategory, setSelectedCategory] = useState("");
  //a state that shows the rightwindow
  const [showRightWindow, setShowRightWindow] = useState(false);
  //state shwing addmodal
  const [showModal, setShowModal] = useState(false);
  //state showing dashboard.
  const [showDashBoard, setShowDashBoard] = useState(false);

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
  //prevents new skus from forming if two sku have the same name. each sku has a uniqe key value.
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
        <CSSTransition
          in={showDashBoard}
          timeout={300}
          classNames="slide"
          unmountOnExit
        >
          <DashBoard />
        </CSSTransition>
        <div
          className="bg-white  h-screen  w-1/3 border-r-2 border-gray-500"
          name="middlewindow"
        >
          <div className="" name="listwindow">
            <div className="flex left-0 mb-4">
              <select
                className="bg-white rounded-md  border border-gray-400 px-4 py-2 leading-5 font-medium
            text-gray-700 flex-shrink-0"
                value={mode}
                onChange={handleChange}
              >
                <option value="all">All Items</option>
                <option value="true">Active Item Group</option>
                <option value="false">Inactive Item Group</option>
              </select>

              <CatagoryButtonModal />

              <div class="ml-5 border border-gray-400 rounded-md w-30px sm:w-full flex-shrink-0">
                <GiHamburgerMenu
                  className="ml-3 h-10"
                  size={30}
                  onClick={() => setShowDashBoard(!showDashBoard)}
                />
              </div>
            </div>

            <div className="overflow-y-scroll h-screen">
              {Object.keys(groupedProducts).map((sku) => (
                <ListGroup
                  key={sku}
                  bsClass="bg-white rounded-md shadow-md overflow-y-scroll w-full"
                >
                  <ListGroupItem
                    className={`d-flex cursor-pointer hover:bg-gray-200 ${
                      selectedCategory === sku ? "text-black" : "text-blue-600"
                    }`}
                    onClick={() => {
                      toggleSubmenu(sku);
                      if (selectedCategory === sku) {
                        setShowRightWindow(false);
                      } else {
                        setShowRightWindow(true);
                      }
                    }}
                  >
                    <div className="d-flex align-items-center">
                      <input type="checkbox" />
                      <BsFolder2 className="ml-2 " color="gray" size={20} />
                      <span className="ml-3 font-semibold text-md text-center w-full">
                        {sku}
                      </span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="ml-auto text-sm font-medium text-gray-600 text-truncate">
                        {groupedProducts[sku].length} items
                      </span>
                    </div>
                  </ListGroupItem>
                  {selectedCategory === sku && (
                    <div className="ml-12">
                      {groupedProducts[sku].map((product) => (
                        <ListGroupItem
                          key={product.id}
                          className="d-flex text-blue-600 align-items-center"
                        >
                          <span className=" font-semibold ">
                            {product.name}
                          </span>
                        </ListGroupItem>
                      ))}
                    </div>
                  )}
                </ListGroup>
              ))}
            </div>
          </div>
        </div>
        {showRightWindow && (
          <div className="bg-white w-2/3 h-screen right-0" name="rightwindow">
            <button
              className="absolute  right-0 m-4 top-4  text-black text-2xl p-2 rounded-full"
              onClick={() => {
                setShowRightWindow(false);
                setSelectedCategory("");
              }}
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
