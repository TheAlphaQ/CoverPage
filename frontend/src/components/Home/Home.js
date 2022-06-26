import React, { useEffect } from "react";
import "./Home.css";
import { CgMouse } from "react-icons/cg";
import Product from "./Product.js";
import MetaData from "../layout/MetaData";
import { getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";

const product = {
  name: "The Dresden Files",
  images: [{ url: "https://i.imgur.com/broLZqb.jpeg" }],
  price: "150",
  _id: "abhishek",
};

const Home = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <div className="homeSection">
      <MetaData title="Home" />
      <div className="banner">
        <h1>Welcome to CoverPage</h1>
        <h3>The bookstore that reads you while you read them.</h3>

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
        {products &&
          products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Home;
