import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import { FaPlay } from "react-icons/fa";
import aboutImg from "../assets/images/resource/about-1.jpg";

const AboutSection = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section
      className="about-section"
      id="about"
      style={{
        paddingTop: "100px",
        paddingBottom: "100px",
        position: "relative",
        zIndex: 10,
      }}
    >
      <div className="auto-container">
        <div className="inner-container clearfix">
          <div className="row clearfix">
            {/* Video Column */}
            <div className="col-lg-6 col-md-6 video-column">
              <div
                className="video-inner"
                style={{
                  backgroundImage: `url(${aboutImg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "8px",
                  height: "400px",
                  position: "relative",
                }}
              >
                <button
                  className="video-btn lightbox-image btn"
                  onClick={() => setOpen(true)}
                  aria-label="Play video"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontSize: "2rem",
                    backgroundColor: "rgba(0,0,0,0.6)",
                    color: "#fff",
                    border: "none",
                    borderRadius: "50%",
                    padding: "20px",
                    cursor: "pointer",
                  }}
                >
                  <FaPlay />
                </button>
              </div>
            </div>

            {/* Content Column */}
            <div className="col-lg-6 col-md-6 content-column">
              <div className="content-box">
                <div className="sec-title mb-2">
                  <span className="text-danger fw-bold">About Us</span>
                  <h2 className="fw-bold">
                    Savannah Halal Meat & Grocery Store
                  </h2>
                </div>
                <p>
                  We are your one-stop destination for 100% halal-certified meat
                  and a wide selection of fresh groceries and household
                  essentials.
                </p>
                <ul className="list-unstyled">
                  <li>✅ Premium Halal Meat – Fresh & Organic</li>
                  <li>✅ Daily Essentials – All in One Place</li>
                  <li>✅ Affordable Pricing & Friendly Service</li>
                </ul>
                <div className="btn-box mt-4">
                  <a
                    href="/about"
                    className="theme-btn btn btn-outline-dark"
                    style={{
                      backgroundColor: "#da292a",
                      color: "#fff",
                      border: "none",
                    }}
                  >
                    View More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Video */}
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="nfP5N9Yc72A"
        onClose={() => setOpen(false)}
      />
    </section>
  );
};

export default AboutSection;
