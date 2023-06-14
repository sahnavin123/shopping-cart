import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import { ShopContextProvider } from "./context/ShopContext";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="App">
      <ShopContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </ShopContextProvider>
    </div>
  );
};

export default App;
