import "./mobileNav.css";
import { BsFillBrightnessHighFill } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import { auth } from "../firebase/firebase-config";
import { signOut } from "firebase/auth";
import { selectCurrentUser } from "../redux/userSelectore";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CartIcon from "./cartIcon";

const MobileNavBar = ({ currentUser }) => {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="mobileNav-wrapper">
      <div className="mobile-logo-wrapper">
        <Link to="/" className="logo-link">
          <BsFillBrightnessHighFill className="nav-icon" />
        </Link>
        <div className="toggle-icon-box">
          <Link to="/checkout">
            <CartIcon isMobileCartIcon />
          </Link>
          <div className="toggle-icon" onClick={() => setShowNav(!showNav)}>
            {showNav ? (
              <FaTimes className="bar-icon" />
            ) : (
              <FaBars className="bar-icon" />
            )}
          </div>
        </div>
      </div>
      <div className={`mobile-link-wrapper ${showNav && "mobile-show"}`}>
        <Link to="/" onClick={() => setShowNav(!showNav)}>
          home
        </Link>
        <Link to="/shop" onClick={() => setShowNav(!showNav)}>
          shop
        </Link>
        <Link to="/contact" onClick={() => setShowNav(!showNav)}>
          contact
        </Link>
        {currentUser ? (
          <div onClick={() => signOut(auth)}>sign out</div>
        ) : (
          <Link to="/login" onClick={() => setShowNav(!showNav)}>
            signIn
          </Link>
        )}

        <Link to="/checkout" onClick={() => setShowNav(!showNav)}>
          checkout
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
export default connect(mapStateToProps)(MobileNavBar);

// const MobileNavBar = ({ currentUser }) => {
//   const [showNav, setShowNav] = useState(false);
//   return (
//     <div className="mobileNav-wrapper">
//       <div className="mobile-logo-wrapper">
//         <Link to="/" className="logo-link">
//           <BsFillBrightnessHighFill className="nav-icon" />
//         </Link>
//         <div className="toggle-icon" onClick={() => setShowNav(!showNav)}>
//           {showNav ? (
//             <BsArrowBarUp className="bar-icon" />
//           ) : (
//             <FaBars className="bar-icon" />
//           )}
//         </div>
//       </div>
// {showNav ? (
//   <div
//     className={`${
//       showNav ? "mobile-link-wrapper mobile-show" : "mobile-link-wrapper"
//     }`}
//   >
//     <Link to="/" onClick={() => setShowNav(!showNav)}>
//       home
//     </Link>
//     <Link to="/shop" onClick={() => setShowNav(!showNav)}>
//       shop
//     </Link>
//     <Link to="/contact" onClick={() => setShowNav(!showNav)}>
//       contact
//     </Link>
//     {currentUser ? (
//       <div onClick={() => signOut(auth)}>sign out</div>
//     ) : (
//       <Link to="/login" onClick={() => setShowNav(!showNav)}>
//         signIn
//       </Link>
//     )}

//     <Link to="/checkout" onClick={() => setShowNav(!showNav)}>
//       checkout
//     </Link>
//   </div>
// ) : null}
//     </div>
//   );
// };

// const mapStateToProps = createStructuredSelector({
//   currentUser: selectCurrentUser,
// });
// export default connect(mapStateToProps)(MobileNavBar);

// import "./mobileNav.css";
// import { BsFillBrightnessHighFill } from "react-icons/bs";
// import { FaBars } from "react-icons/fa";
// import { BsArrowBarUp } from "react-icons/bs";
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import { auth } from "../firebase/firbase-config";
// import { signOut } from "firebase/auth";
// import { selectCurrentUser } from "../redux/userSelectors";
// import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";
