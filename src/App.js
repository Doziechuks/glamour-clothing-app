import './App.css';
import HomePage from './components/homePage';
import Navbar from './components/navBar';
import ShopPage from './components/shop';
import SignInandSignOut from './components/signInandSignOut';
import SignUp from './components/signUp';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/shop" element={<ShopPage />} />
        <Route exact path="/login" element={<SignInandSignOut />} />
        <Route exact path="/sign up" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
