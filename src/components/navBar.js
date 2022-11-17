import './navBar.css';
import { BsFillBrightnessHighFill } from "react-icons/bs";
import { Link, useLocation } from 'react-router-dom';
import CartIcon from './cartIcon';
import CartDropdown from './dropDown';
import { useEffect, useState } from 'react';
import { auth } from '../firebase/firebase-config';
import { signOut } from 'firebase/auth';
import { selectCurrentUser } from '../redux/userSelectore';
import { connect } from 'react-redux';
import { selectCartHidden } from "../redux/cartSelector";
import { createStructuredSelector } from 'reselect';

const Navbar = ({ currentUser, cartHidden }) => {
  console.log(currentUser)
  const [path, setPath] = useState('');
  const { pathname } = useLocation();
  useEffect(()=>{
    setPath(pathname);
  }, [pathname])

  const handleSignOut = async () => {
    try {
      await signOut(auth)
    } catch (error) {
     console.log(error.message) 
    }
  }

  return (
    <div className="nav-wrapper">
      <Link to="/">
        <BsFillBrightnessHighFill className="nav-icon" />
      </Link>
      <div className="pages">
        <Link
          to="/"
          className={`option ${path === '/' ? 'active' : ''}`}
        >
          Home
        </Link>
        <Link
          to="/shop"
          className={`option ${path.includes('/shop') ? 'active' : ''}`}
        >
          shop
        </Link>
        <Link
          to="/contact"
          className={`option ${path.includes('/contact') ? 'active' : ''}`}
        >
          contact us
        </Link>
        {currentUser ? (
          <div onClick={handleSignOut} className="option">
            sign out
          </div>
        ) : (
          <Link
            to="/login"
            className={`option ${path.includes('/login') ? 'active' : ''}`}
          >
            sign in
          </Link>
        )}
        <CartIcon />
      </div>
      {cartHidden ? null : <CartDropdown />}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartHidden: selectCartHidden
});
 
export default connect(mapStateToProps)(Navbar);