import React from "react";
import { FaTruck, FaShoppingBasket } from "react-icons/fa";
import { LuBeef } from "react-icons/lu";
import "../assets/css/ServiceSection.css";

const services = [
  {
    icon: <FaTruck size={32} />,
    title: "Fast Local Delivery",
    description:
      "Get fresh halal meat, groceries, and essentials delivered right to your doorstep — quick, safe, and reliable.",
  },
  {
    icon: <FaShoppingBasket size={32} />,
    title: "Groceries & Household Essentials",
    description:
      "From spices to snacks, cleaning supplies to daily staples — we stock everything your home needs.",
  },
  {
    icon: <LuBeef size={32} />,
    title: "Halal-Certified Meat",
    description:
      "Our meat is 100% halal-certified, ethically sourced, and handled with the utmost care and hygiene.",
  },
];

const ServicesSection = () => {
  return (
    <section className="services-section py-5" id="services">
      <div className="container text-center">
        <div className="mb-5">
          <span className="text-danger fw-bold">Our Services</span>
          <h2 className="fw-bold">What We Offer</h2>
        </div>
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div className="service-card text-white p-4 h-100 rounded">
                <div className="mb-3 text-white icon-box">{service.icon}</div>
                <h5 className="fw-bold">{service.title}</h5>
                <p className="text-light">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
