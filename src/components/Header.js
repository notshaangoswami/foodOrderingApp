import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const { loggedInUser } = useContext(UserContext);
  const [authButton, setAuthButton] = useState("Login");
  const onlineStatus = useOnlineStatus();
  //Subscribing to the store using Selector hook(reading the value of store)
  const cartItems = useSelector((store) => store.cart.items);
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
          <li className="px-4">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 text-lg font-semibold">
            <Link to="/cart"> Cart({cartItems.length})</Link>
          </li>

          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>

          <button className="login-btn" onClick={handleLogin}>
            {authButton}
          </button>
          <li className="px-4 text-lg font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
