import './navBar.css';
import { BsFillBrightnessHighFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="nav-wrapper">
      <BsFillBrightnessHighFill className="nav-icon" />
      <div className="pages">
        <Link to="/" className="option">
          Home
        </Link>
        <Link to="/shop" className="option">
          shop
        </Link>
        <Link to="/contact" className="option">
          contact us
        </Link>
        <Link to="/sign in" className="option">
          sign in
        </Link>
      </div>
    </div>
  );
}
 
export default Navbar;