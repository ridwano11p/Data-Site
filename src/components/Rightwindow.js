import { React, useState, useEffect } from "react";
import axios from "axios";
import ShoppingTable from "./Table";
import { BiPencil } from "react-icons/bi";
import RightwindowSelect from "./RightwindowSelect";
import Rightmodal from "./Rightmodal";
import RightwindowEdit from "./RightwindowEdit";
const Rightwindow = (props) => {
  const sku = props.sku;
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:5000/api/products");
      console.log(result.data); // add this line to log the data
      setData(result.data);
    };

    fetchData();
  }, []);

  const skuItems = data.filter((item) => item.sku === sku);
  const matchingItem = data.find((item) => item.sku === sku);
  console.log(matchingItem); // add this line to log the matching item
  const description = matchingItem
    ? matchingItem.description || "No description available"
    : "";
  console.log(description); // add this line to log the description

  return (
    <>
      <div class="flex ml-5 mt-4">
        {skuItems.map((item) => (
          <RightwindowEdit item={item} />
        ))}

        <Rightmodal sku={sku} />
        {skuItems.map((item) => (
          <RightwindowSelect item={item} />
        ))}
      </div>
      <br></br>
      <div className="flex">
        <div className="justify-start w-1/2">
          <h1 className="text-2xl">{props.sku}</h1>
          <h1 className="text-2xl">
            Current iD ( {matchingItem ? matchingItem.categoryId : "N/A"})
          </h1>

          <p className="text-green-600">(items {skuItems.length})</p>
          <br></br>
          <br></br>

          <div class="flex flex-col text-left ml-5">
            <div class="flex justify-between items-center">
              <div className="text-black justify-start w-1/2">units</div>
              <div className="text-blue-500 font-bold mx-8 justify-end w-1/2">
                {matchingItem ? matchingItem.unit : "N/A"}
              </div>
            </div>
            <br></br>
            <br></br>

            <div class="flex justify-between items-center">
              <div className="text-black justify-start w-1/2">tax</div>
              <div className="text-blue-500 font-bold mx-8 justify-end w-1/2">
                {matchingItem ? matchingItem.tax : "N/A"}
              </div>
            </div>
            <br></br>
            <br></br>
            <div class="flex justify-between items-center">
              <div className="text-black justify-start w-1/2">style</div>
              <br></br>
              <br></br>
              <div class="flex mx-8 justify-end w-1/2 mr-[130px]">
                {skuItems.map((item) => (
                  <button className=" stylebutton bg-blue-500 text-white font-bold py-1 px-2 rounded-full text-sm mr-2">
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
            <br></br>
            {matchingItem && (
              <p className="text-black" style={{ maxHeight: "200px" }}>
                Description: {matchingItem.description}
              </p>
            )}
          </div>
        </div>
        <div className="justify-end w-1/2 mt-[100px]">
          <div class="flex justify-between items-center">
            <div className="text-black justify-start w-1/2">Manufacturer</div>
            <div className="mx-8 justify-end w-1/2">
              {" "}
              {matchingItem ? matchingItem.manufacturer : "N/A"}
            </div>
          </div>
          <br></br>
          <br></br>
          <div class="flex justify-between items-center">
            <div className="text-black justify-start w-1/2">Brand</div>
            <div className="mx-8 justify-end w-1/2">
              {" "}
              {matchingItem ? matchingItem.brand : "N/A"}
            </div>
          </div>
        </div>
      </div>
      <div>
        <br></br>
        <ShoppingTable items={skuItems} />
      </div>
    </>
  );
};
export default Rightwindow;
