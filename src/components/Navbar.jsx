import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <h2 className="heading" onClick={() => navigate("/")}>
        ShopNow
      </h2>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">
          <AiOutlineShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
