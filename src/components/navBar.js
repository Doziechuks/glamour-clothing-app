import './navBar.css';
import { BsFillBrightnessHighFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [active, setActive] = useState('home');
  return (
    <div className="nav-wrapper">
      <Link
       to="/"
       onClick={() => setActive("home")} 
       className="logo-link"
       >
        <BsFillBrightnessHighFill className="nav-icon" />
      </Link>
      <div className="pages">
        <Link
          to="/"
          onClick={() => setActive("home")}
          className={`option ${active === "home" ? "active" : ""}`}
        >
          Home
        </Link>
        <Link
          to="/shop"
          onClick={() => setActive("shop")}
          className={`option ${active === "shop" ? "active" : ""}`}
        >
          shop
        </Link>
        <Link
          to="/contact"
          onClick={() => setActive("contact")}
          className={`option ${active === "contact" ? "active" : ""}`}
        >
          contact us
        </Link>
        <Link
          to="/sign in"
          onClick={() => setActive("sign in")}
          className={`option ${active === "sign in" ? "active" : ""}`}
        >
          sign in
        </Link>
      </div>
    </div>
  );
}
 
export default Navbar;