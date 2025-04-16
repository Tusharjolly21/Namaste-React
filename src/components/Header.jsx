import { LOGO_URL } from "../utils/constans";
import { useState } from "react";

export const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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
