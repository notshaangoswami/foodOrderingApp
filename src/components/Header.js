import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [authButton, setAuthButton] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const handleLogin = () => {
    if (authButton == "Login") {
      setAuthButton("Logout");
    } else {
      setAuthButton("Login");
    }
  };

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg m-2">
      <div>
        <img className="h-28" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            Online Status: {onlineStatus ? "true" : "false"}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>

          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>

          <button className="login-btn" onClick={handleLogin}>
            {authButton}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
