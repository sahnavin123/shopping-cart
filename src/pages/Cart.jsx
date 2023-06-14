import React, { useContext } from "react";
import { PRODUCTS } from "../assets/Product";
import { ShopContext } from "../context/ShopContext";
import CartItem from "./CartItem";
import "./cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.filter((product) => cartItems[product.id] !== 0).map(
          (product) => (
            <CartItem key={product.id} data={product} />
          )
        )}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p>
            <b>Subtotal: ${totalAmount}</b>
          </p>
          <button onClick={() => navigate("/shop")}>Continue Shopping</button>
          <button>Checkout</button>
        </div>
      ) : (
        <h1>Your cart is empty, add some products !!</h1>
      )}
    </div>
  );
};

export default Cart;
