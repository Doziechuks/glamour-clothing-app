import './App.css';
import HomePage from './components/homePage';
import Navbar from './components/navBar';
import ShopPage from './components/shop';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/shop" element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
