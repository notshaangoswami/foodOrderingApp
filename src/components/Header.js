import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header = () => {
  const [authButton, setAuthButton] = useState("LOGIN");
  const handleLogin = () => {
    if (authButton == "LOGIN") {
      setAuthButton("LOGOUT");
    } else {
      setAuthButton("LOGIN");
    }
  };

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About US</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="login-btn" onClick={handleLogin}>
            {authButton}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
