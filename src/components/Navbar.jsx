import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const { cartItems } = useContext(ShopContext);

  return (
    <div className="navbar">
      <h2 className="heading" onClick={() => navigate("/")}>
        ShopNow
      </h2>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">
          {Object.keys(cartItems).length > 0 ? (
            <p className="cart-size">{Object.keys(cartItems).length}</p>
          ) : null}
          <AiOutlineShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
