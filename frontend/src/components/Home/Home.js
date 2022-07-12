import "./Home.css";
import Product from "./Product.js";
import MetaData from "../layout/MetaData";
import React, { useEffect } from "react";
import Rellax from "rellax";
import { getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, error, products, productsCount } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    new Rellax(".rellax"); // <---- Via class name
  }, []);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <div className="homeSection">
      <MetaData title="Home" />
      <div className="banner">
        <h1 className="rellax" data-rellax-speed="-1">
          Welcome to CoverPage
        </h1>
        <h3 className="rellax" data-rellax-speed="-3" data-rellax-zindex="-1">
          The bookstore that reads you while you read them.
        </h3>
      </div>

      <h2 id="homeHeading" className="homeHeading">
        Give them a read!
      </h2>

      <div className="container" id="container">
        {products && products.map((product) => <Product product={product} />)}
      </div>
    </div>
  );
};

export default Home;
