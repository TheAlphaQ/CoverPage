import React from "react";
import "./Home.css";
import { CgMouse } from "react-icons/cg";

const Home = () => {
  return (
    <div>
      <div className="banner">
        <p>Welcome to Ecommerce</p>
        <h1>FIND AMAZING PRODUCTS BELOW</h1>

        <a href="#container">
          <button>
            Scroll <CgMouse />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Home;
