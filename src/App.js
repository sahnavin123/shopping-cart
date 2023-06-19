import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import { ShopContextProvider } from "./context/ShopContext";
import Home from "./components/Home";

const App = () => {
  return (
    <HashRouter>
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
    </HashRouter>
  );
};

export default App;
