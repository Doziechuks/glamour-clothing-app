import './App.css';
import HomePage from './components/homePage';
import Navbar from './components/navBar';
import ShopPage from './components/shop';
import SignInandSignOut from './components/signInandSignOut';
import SignUp from './components/signUp';
import { Route, Switch, Redirect } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { onSnapshot } from 'firebase/firestore';
import { auth, checkUser } from './firebase/firebase-config';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/userSelectore';
import { userAction } from './redux/userAction';
import { createStructuredSelector } from 'reselect';

function App({ currentUser, setCurrentUser }) {
  useEffect(() => {
   onAuthStateChanged(auth, async (res) => {
    if(res){
       const userRef = await checkUser(res);
       onSnapshot(userRef, (getSnapShot) => {
        setCurrentUser(getSnapShot.data());
       });
       console.log(setCurrentUser);
    }
    setCurrentUser(res);
   })
  },[])
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
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
  currentUser: selectCurrentUser
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(userAction(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
