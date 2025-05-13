import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

// Theme CSS
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import "./assets/css/color.css";
import "./assets/css/flaticon.css";
import "./assets/css/animate.css";
import "./assets/css/owl.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "keen-slider/keen-slider.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
