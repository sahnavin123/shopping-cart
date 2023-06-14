import React from "react";
import { PRODUCTS } from "../assets/Product";
import Product from "./Product";
import "./shop.css";

const Shop = () => {
  return (
    <div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
