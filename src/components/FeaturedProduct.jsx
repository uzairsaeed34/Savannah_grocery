import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import product1 from "../assets/images/products/product-1.jpg";
import product2 from "../assets/images/products/product-2.jpg";
import product3 from "../assets/images/products/product-3.jpg";
import product4 from "../assets/images/products/product-4.jpg";
import product5 from "../assets/images/products/product-5.jpg";
import "../assets/css/FeaturedProduct.css";

const products = [
  {
    title: "Grass-Fed Beef Ribeye",
    price: "$21.99 / lb",
    rating: 5,
    image: product1,
  },
  {
    title: "Organic Chicken Breast",
    price: "$13.49 / lb",
    rating: 4,
    image: product2,
  },
  {
    title: "Lamb Chops Premium",
    price: "$19.75 / lb",
    rating: 5,
    image: product3,
  },
  {
    title: "Mutton Boneless",
    price: "$22.99 / lb",
    rating: 4,
    image: product4,
  },
  {
    title: "Beef Grounded",
    price: "$15.29 / lb",
    rating: 3,
    image: product5,
  },
];

const renderStars = (rating) => {
  return Array.from({ length: 5 }, (_, i) =>
    i < rating ? (
      <FaStar key={i} className="text-warning me-1" />
    ) : (
      <FaRegStar key={i} className="text-secondary me-1" />
    )
  );
};

const FeaturedProducts = () => {
  return (
    <section className="featured-products py-5" id="featured">
      <div className="container text-center">
        <div className="mb-5">
          <span className="text-danger fw-bold">Top Picks</span>
          <h2 className="fw-bold" style={{ color: "#da292a" }}>
            Featured Products
          </h2>
        </div>

        <div className="row gx-4 gy-5 justify-content-center">
          {/* First row: 3 products */}
          {products.slice(0, 3).map((product, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="product-card shadow rounded-4 p-4 h-100">
                <div className="product-img-wrapper mb-3">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="img-fluid product-img"
                  />
                </div>
                <h5 className="fw-bold">{product.title}</h5>
                <p className="fw-semibold mb-1">{product.price}</p>
                <div className="mb-2">{renderStars(product.rating)}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Second row: 2 products centered */}
        <div className="row gx-4 gy-5 justify-content-center mt-1">
          {products.slice(3).map((product, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="product-card shadow rounded-4 p-4 h-100">
                <div className="product-img-wrapper mb-3">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="img-fluid product-img"
                  />
                </div>
                <h5 className="fw-bold">{product.title}</h5>
                <p className="fw-semibold mb-1">{product.price}</p>
                <div className="mb-2">{renderStars(product.rating)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
