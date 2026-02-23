import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Login from "./components/Login";
import Cart from "./components/Cart";

import "./index.css";

function App() {

  const [cart, setCart] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <BrowserRouter>
      <Navbar 
        cartCount={cart.length}
        isLoggedIn={isLoggedIn}
        handleLogout={handleLogout}
      />

      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;