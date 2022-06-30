import "./Home.css";
import { CgMouse } from "react-icons/cg";
import Product from "./Product.js";
import MetaData from "../layout/MetaData";
import React, { useRef, useEffect } from "react";
import Rellax from "rellax";

const product = {
  name: "The Dresden Files",
  images: [{ url: "https://i.imgur.com/broLZqb.jpeg" }],
  price: "150",
  _id: "abhishek",
};

const Home = () => {
  useEffect(() => {
    new Rellax(".rellax"); // <---- Via class name
  }, []);

  return (
    <div className="homeSection">
      <MetaData title="Home" />
      <div className="banner">
        <h1 className="rellax" data-rellax-speed="-5">
          Welcome to CoverPage
        </h1>
        <h3 className="rellax" data-rellax-speed="5">
          The bookstore that reads you while you read them.
        </h3>

        <a href="#homeHeading">
          <button>
            Scroll <CgMouse />
          </button>
        </a>
      </div>

      <h2 id="homeHeading" className="homeHeading">
        Give them a read!
      </h2>

      <div className="container" id="container">
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
      </div>
    </div>
  );
};

export default Home;
