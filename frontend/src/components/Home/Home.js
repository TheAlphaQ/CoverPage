import "./Home.css";
import Product from "./Product.js";
import MetaData from "../layout/MetaData";
import React, { useEffect } from "react";
import { getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products, productsCount } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (error) {
      return alert.error(error);
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <>
      {loading ? (
        <Loader /> //Loads the loader when page is loading.
      ) : (
        <div className="homeSection">
          <MetaData title="CoverPage" />
          <div className="banner">
            <h1>Welcome to CoverPage</h1>
            <h3>The bookstore that reads you while you read them.</h3>
          </div>

          <h2 id="homeHeading" className="homeHeading">
            Give them a read!
          </h2>

          <div className="container" id="container">
            {products &&
              products.map((product) => <Product product={product} />)}
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
