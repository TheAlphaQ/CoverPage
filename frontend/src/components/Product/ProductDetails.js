import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from "../../actions/productAction";
import { useParams } from "react-router-dom";
import { Rating } from "@mui/material";
import Carousel from "react-bootstrap/Carousel";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );

  const options = {
    size: "large",
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  return (
    <>
      <div className="ProductDetails container-fluid">
        <div className="row mx-5">
          <div className="col-5">
            <Carousel
              activeIndex={index}
              onSelect={handleSelect}
              // fade
              variant="dark"
            >
              {product.images &&
                product.images.map((item, i) => (
                  <Carousel.Item key={item.url}>
                    <img
                      className="d-block CarouselImage mx-auto"
                      src={item.url}
                      alt={`${i} Slide`}
                    />
                  </Carousel.Item>
                ))}
            </Carousel>
          </div>
          <div className="col-7">
            <div className="detailsBlock-1">
              <h2>{product.name}</h2>
              <p>Product # {product._id}</p>
            </div>
            <div className="detailsBlock-2">
              <Rating {...options} />
              <span className="detailsBlock-2-span">
                {" "}
                ({product.numOfReviews} Reviews)
              </span>
            </div>
            <div className="detailsBlock-3">
              <h1>{`₹${product.price}`}</h1>
              <div className="detailsBlock-3-1">
                <div className="detailsBlock-3-1-1">
                  <button>-</button>
                  <input readOnly type="number" value="1" />
                  <button>+</button>
                </div>
                <button>Add to Cart</button>
              </div>

              <p>
                Status:
                <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
                  {product.Stock < 1 ? "OutOfStock" : "InStock"}
                </b>
              </p>
            </div>

            <div className="detailsBlock-4">
              Description :{" "}
              <p className="justify-text">{product.description}</p>
            </div>

            <button className="submitReview">Submit Review</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
