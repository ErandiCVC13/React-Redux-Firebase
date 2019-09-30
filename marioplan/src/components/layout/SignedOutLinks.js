import React from "react";
import { NavLink } from "react-router-dom";

const SingedOutLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/singup">Singup</NavLink>
      </li>
      <li>
        <NavLink to="/singin">Login</NavLink>
      </li>
    </ul>
  );
};

export default SingedOutLinks;
