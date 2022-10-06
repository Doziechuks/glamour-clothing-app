import './navBar.css';
import { BsFillBrightnessHighFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { auth } from '../firebase/firebase-config';
import { signOut } from 'firebase/auth';
import { selectCurrentUser } from '../redux/userSelectore';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const Navbar = ({ currentUser }) => {
  const [active, setActive] = useState('home');
  const handleSignOut = async () => {
    try {
      await signOut(auth)
    } catch (error) {
     console.log(error.message) 
    }
  }

  return (
    <div className="nav-wrapper">
      <Link to="/" onClick={() => setActive("home")} className="logo-link">
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
        {currentUser ? (
          <div onClick={handleSignOut} className="option">sign out</div>
        ) : (
          <Link
            to="/login"
            onClick={() => setActive("sign in")}
            className={`option ${active === "sign in" ? "active" : ""}`}
          >
            sign in
          </Link>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})
 
export default connect(mapStateToProps)(Navbar);