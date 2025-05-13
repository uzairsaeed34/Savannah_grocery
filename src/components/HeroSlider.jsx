import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FaArrowRight } from "react-icons/fa";

import banner1 from "../assets/images/banner/banner-1.jpg";
import banner2 from "../assets/images/banner/banner-2.jpg";
import banner3 from "../assets/images/banner/banner-3.jpg";

const HeroSlider = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: true,
    slides: { perView: 1 },
    created: (slider) => {
      setInterval(() => {
        slider.next();
      }, 5000);
    },
  });

  const banners = [banner1, banner2, banner3];

  return (
    <section
      style={{ position: "relative", height: "100vh", overflow: "hidden" }}
    >
      {/* Slides with overlay */}
      <div ref={sliderRef} className="keen-slider" style={{ height: "100vh" }}>
        {banners.map((banner, index) => (
          <div
            key={index}
            className="keen-slider__slide"
            style={{ position: "relative" }}
          >
            <div
              style={{
                backgroundImage: `url(${banner})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
                filter: "brightness(0.4)", // Darken image for contrast
              }}
            />
          </div>
        ))}
      </div>

      {/* Fixed Text Overlay */}
      <div
        className="d-flex justify-content-center align-items-center text-center"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100vh",
          width: "100%",
          zIndex: 2,
        }}
      >
        <div className="content-box text-white px-3">
          <h1 className="fw-bold text-white" style={{ fontSize: "4.1rem" }}>
            Fresh, Safe Quality Meats
          </h1>
          <p className="mb-4 text-white" style={{ fontSize: "1.5rem" }}>
            Food that matters - to you, to farmers and to the planet we all
            share.
          </p>
          <a
            href="#about"
            className="btn btn-lg d-inline-flex align-items-center theme-btn btn btn-outline-dark"
            style={{
              backgroundColor: "#da292a", // Matches header exactly
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
            Learn More <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
