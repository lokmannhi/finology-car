import React from "react";
import { Link, Outlet } from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      {" "}
      <div className="links">
        {" "}
        <Link to="/">Home</Link>
        <Link to="/car">Car</Link>
      </div>
      <div className="outlet">
        <Outlet />
      </div>
    </>
  );
};

export default NavBar;
