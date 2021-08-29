import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <h1>This Website Is Made With The Help Of React-Router-Dom</h1>
      <ul>
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/about">
          About Us
        </Link>
        <Link className="link" to="/Products">
          Products
        </Link>
        <Link className="link" to="/contact">
          Contact Us
        </Link>
        <Link className="link" to="/login">
          Login
        </Link>
      </ul>
    </div>
  );
}

export default Header;
