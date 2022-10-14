import "./App.css";
import HomePage from "./components/homePage";
import Navbar from "./components/navBar";
import MobileNavBar from "./components/mobileNav";
import SignInandSignOut from "./components/signInandSignOut";
import SignUp from "./components/signUp";
import CheckoutPage from "./components/checkout";
import CollectionPage from "./components/collectionPage";
import ShopPage from "./components/ShopPage";
import { Route, Switch, Redirect } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { onSnapshot } from "firebase/firestore";
import { auth, checkUser } from "./firebase/firebase-config";
import { useEffect } from "react";
import { connect } from "react-redux";
import { selectCurrentUser } from "./redux/userSelectore";
import { userAction } from "./redux/userAction";
import { createStructuredSelector } from "reselect";

function App({ currentUser, setCurrentUser }) {
  useEffect(() => {
    onAuthStateChanged(auth, async (res) => {
      if (res) {
        const userRef = await checkUser(res);
        onSnapshot(userRef, (getSnapShot) => {
          setCurrentUser(getSnapShot.data());
        });
        console.log(setCurrentUser);
      }
      setCurrentUser(res);
    });
  }, []);
  return (
    <div>
      <Navbar />
      <MobileNavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route exact path="/shop/:collectionId" component={CollectionPage} />
        <Route
          exact
          path="/login"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInandSignOut />
          }
        />
        <Route
          exact
          path="/signUp"
          render={() => (currentUser ? <Redirect to="/" /> : <SignUp />)}
        />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(userAction(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
