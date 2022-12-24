import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const Dashboard = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex h-screen">
      <div className="w-64 bg-gray-700 h-full">
        <ul className="p-4">
          <li className="text-white font-bold py-2">
            <i className="fas fa-tachometer-alt mr-2"></i> Dashboard
          </li>
          <li className="text-white py-2">
            <i className="fas fa-address-book mr-2"></i> Contacts
          </li>
          <li className="text-white py-2 relative">
            <button
              id="dropdownDefault"
              data-dropdown-toggle="dropdown"
              className="text-white bg-blue-500 hover:bg-blue-500 focus:ring-4 focus:outline-none
               focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center 
               dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
              onClick={toggleMenu}
            >
              <i className="fas fa-box mr-2"></i>
              Items
              <svg
                className={`ml-2 w-4 h-4 ${isMenuOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {isMenuOpen && (
              <ul className="absolute left-0 mt-4 p-4 bg-gray-800 rounded-lg shadow-xl z-10">
                <li className="text-white py-2 flex items-center justify-between">
                  Item Groups
                  <AiOutlinePlus color="white" size={20} />
                </li>
                <li className="text-white py-2">Items</li>
                <li className="text-white py-2">Composite Items</li>
                <li className="text-white py-2">Items Adjustments</li>
              </ul>
            )}
          </li>
          <li
            className={`text-white py-2 transform transition-all duration-300 ${
              isMenuOpen ? "translate-y-32" : ""
            }`}
          >
            <i className="fas fa-shopping-cart mr-2"></i> Sales Order
          </li>
          <li
            className={`text-white py-2 transform transition-all duration-300 ${
              isMenuOpen ? "translate-y-32" : ""
            }`}
          >
            <i className="fas fa-box-open mr-2"></i> Packages
          </li>
          <li
            className={`text-white py-2 transform transition-all duration-300 ${
              isMenuOpen ? "translate-y-32" : ""
            }`}
          >
            <i className="fas fa-file-invoice mr-2"></i> Invoices
          </li>
          <li
            className={`text-white py-2 transform transition-all duration-300 ${
              isMenuOpen ? "translate-y-32" : ""
            }`}
          >
            <i className="fas fa-file-import mr-2"></i> Purchase Orders
          </li>
          <li
            className={`text-white py-2 transform transition-all duration-300 ${
              isMenuOpen ? "translate-y-32" : ""
            }`}
          >
            <i className="fas fa-file-invoice-dollar mr-2"></i> Bills
          </li>
          <li
            className={`text-white py-2 transform transition-all duration-300 ${
              isMenuOpen ? "translate-y-32" : ""
            }`}
          >
            <i className="fas fa-plug mr-2"></i> Integrations
          </li>
          <li
            className={`text-white py-2 transform transition-all duration-300 ${
              isMenuOpen ? "translate-y-32" : ""
            }`}
          >
            <i className="fas fa-plug mr-2"></i> Reports
          </li>
        </ul>
      </div>
      <div className="flex-1 bg-gray-300">{/* Main content goes here */}</div>
    </div>
  );
};

export default Dashboard;
