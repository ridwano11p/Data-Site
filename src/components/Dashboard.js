import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

function DashBoard() {
  const [itemsOpen, setItemsOpen] = useState(false);

  return (
    <div className="bg-gray-900 h-screen">
      <nav className="bg-gray-800 h-full p-6">
        <h1 className="text-white text-2xl font-semibold block py-2">
          Dashboard
        </h1>
        <a
          className="text-white font-semibold block py-2 hover:bg-gray-700"
          href="#contact"
        >
          Contact
        </a>
        <button
          className="text-white font-semibold block py-2 hover:bg-blue-300 bg-blue-500 w-32"
          onClick={() => setItemsOpen(!itemsOpen)}
        >
          Items
          <svg
            className="w-3 h-3 inline"
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

        <div className={`${itemsOpen ? "block" : "hidden"} py-2 bg-gray-800`}>
          <a
            className="text-white font-semibold block py-2 hover:bg-gray-700 bg-slate-900 flex justify-end"
            href="#item-groups"
          >
            Item Groups
            <div className="ml-auto">
              <AiOutlinePlus />
            </div>
          </a>

          <a
            className="text-white font-semibold block py-2 hover:bg-gray-700"
            href="#items"
          >
            Items
          </a>
          <a
            className="text-white font-semibold block py-2 hover:bg-gray-700"
            href="#composite-items"
          >
            Composite Items
          </a>

          <a
            className="text-white font-semibold block py-2 hover:bg-gray-700"
            href="#item-adjustments"
          >
            Item Adjustments
          </a>
          <a
            className="text-white font-semibold block py-2 hover:bg-gray-700"
            href="#transfer-orders"
          >
            Transfer Orders
          </a>
        </div>
        <a
          className="text-white font-semibold block py-2 hover:bg-gray-700"
          href="#sales-orders"
        >
          Sales orders
        </a>
        <a
          className="text-white font-semibold block py-2 hover:bg-gray-700"
          href="#packages"
        >
          Packages
        </a>
        <a
          className="text-white font-semibold block py-2 hover:bg-gray-700"
          href="#invoices"
        >
          Invoices
        </a>
        <a
          className="text-white font-semibold block py-2 hover:bg-gray-700"
          href="#purchase-orders"
        >
          Purchase orders
        </a>
        <a
          className="text-white font-semibold block py-2 hover:bg-gray-700"
          href="#bills"
        >
          Bills
        </a>
        <a
          className="text-white font-semibold block py-2 hover:bg-gray-700"
          href="#integrations"
        >
          Integrations
        </a>
        <a
          className="text-white font-semibold block py-2 hover:bg-gray-700"
          href="#reports"
        >
          Reports
        </a>
      </nav>
    </div>
  );
}

export default DashBoard;
