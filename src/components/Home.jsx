import React from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h1>Welcome to ShopNow</h1>
      <p>
        Buy whatever you want, click to
        <span onClick={() => navigate("/shop")}>
          <b>Shop!!</b>
        </span>
        section
      </p>
    </div>
  );
};

export default Home;
