import React from "react";
import { Link } from "react-router-dom";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white ">
      <div
        className="  w-full h-[690px]  mx-auto text-center flex flex-col justify-center
      
      "
        id="herobody"
      >
        <p className="text-[#00df9a] font-bold p-2">
          DTATA SITE FOR API REQUESTS AND CRUD FUNCTIONALITY.
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Welcome to this Api Site.
        </h1>
        <br></br>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Data fetcher useing
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={["AXIOS", "&", "CRUD"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-green-500">
          This website uses Api to fetch data useing both the Axios method and
          the javascript Fetch method.
        </p>

        <div>
          <Link to={"/Signup"}>
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
