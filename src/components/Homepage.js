import React from "react";
import NavBar from "./NavBar";
import Hero from "./Hero";
import Userlist from "./Userlist";
import AxiosTable from "./AxiosTable";
const Homepage = () => {
  return (
    <div>
      <NavBar />

      <Userlist />
      <AxiosTable />
    </div>
  );
};

export default Homepage;
