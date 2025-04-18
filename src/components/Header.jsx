import { LOGO_URL } from "../utils/constans";
import { useState } from "react";
import { Link } from "react-router";

export const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link className="link-tag" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link-tag" to="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link className="link-tag" to="/contact">
              Contact Us
            </Link>
          </li>
          <li>Cart</li>
          <button
            onClick={() => {
              setBtnName(btnName === "Login" ? "Logout" : "Login");
            }}
            className="login-btn"
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
