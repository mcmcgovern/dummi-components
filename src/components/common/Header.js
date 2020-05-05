import React from "react";
import { NavLink } from "react-router-dom";
import "../../App.css";

const Header = () => {
  const activeStyle = { color: "lime" };
  return (
    <nav className="App-header">
      <NavLink activeStyle={activeStyle} exact to="/">
        Home
      </NavLink>
      {" | "}
      <NavLink activeStyle={activeStyle} to="/signup">
        Signup
      </NavLink>
      {" | "}
      <NavLink activeStyle={activeStyle} to="/creative">
        Creative
      </NavLink>
      {" | "}
      <NavLink activeStyle={activeStyle} to="/about">
        About
      </NavLink>
    </nav>
  );
};

export default Header;
