import React from "react";
import shopImg from "../assets/images/resource/portfolio-1.jpg";
import { FaCheck, FaArrowRight } from "react-icons/fa";

const ShopSection = () => {
  return (
    <section className="shop-about-section py-5" id="shop">
      <div className="container">
        <div className="row align-items-center gy-4">
          {/* Image Column */}
          <div className="col-lg-6">
            <img
              src={shopImg}
              alt="Savannah Halal Meat"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* Content Column */}
          <div className="col-lg-6">
            <span className="text-danger fw-bold">About Our Meat Store</span>
            <h2 className="fw-bold mt-2 mb-3" style={{ color: "#da292a" }}>
              Premium Halal Meats — Fresh, Clean, Trusted
            </h2>
            <p className="text-muted">
              At Savannah Halal Meat & Grocery, meat is our pride and passion.
              We specialize in delivering the freshest halal-certified beef,
              chicken, lamb, goat, and more — all ethically sourced, expertly
              cut, and handled with care. Whether you're grilling, roasting, or
              stewing, our quality meats ensure unbeatable flavor and nutrition.
            </p>

            <ul className="list-unstyled mt-4 mb-4">
              <li className="d-flex align-items-center mb-2">
                <FaCheck className="text-danger me-2" />
                100% Halal — ethically slaughtered and verified
              </li>
              <li className="d-flex align-items-center mb-2">
                <FaCheck className="text-danger me-2" />
                Custom cuts by expert butchers
              </li>
              <li className="d-flex align-items-center mb-2">
                <FaCheck className="text-danger me-2" />
                Fast, cold-chain delivery to preserve freshness
              </li>
            </ul>

            <a
              href="#featured"
              className="btn btn-lg d-inline-flex align-items-center theme-btn btn btn-outline-dark"
              style={{
                backgroundColor: "#da292a",
                color: "#fff",
                border: "none",
                fontFamily: `'Rubik', sans-serif`,
                fontSize: "1.1rem",
                gap: "16px",
                padding: "12px 24px",
                boxShadow: "none",
                outline: "none",
              }}
            >
              Shop Now <FaArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
