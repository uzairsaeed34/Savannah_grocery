import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import "../assets/css/ContactSection.css";

const ContactSection = () => {
  return (
    <section className="contact-section py-5" id="contact">
      <div className="container">
        <div className="text-center mb-5">
          <span className="text-danger fw-bold">Get In Touch</span>
          <h2 className="fw-bold" style={{ color: "#da292a" }}>
            Contact Us
          </h2>
        </div>

        <div className="row g-5">
          {/* Contact Info */}
          <div className="col-lg-5">
            <div className="mb-4 d-flex align-items-start">
              <FaMapMarkerAlt className="me-3 text-danger mt-1" />
              <div>
                <h6 className="fw-bold mb-1">Our Address</h6>
                <p className="text-muted mb-0">
                  9052 46 St NE, Calgary, AB T3J 4E4, Canada
                </p>
              </div>
            </div>
            <div className="mb-4 d-flex align-items-start">
              <FaPhoneAlt className="me-3 text-danger mt-1" />
              <div>
                <h6 className="fw-bold mb-1">Call Us</h6>
                <p className="text-muted mb-0">
                  <a
                    href="tel:+14034553758"
                    className="text-muted text-decoration-none"
                  >
                    +1 403-455-3758
                  </a>
                </p>
              </div>
            </div>
            <div className="mb-4 d-flex align-items-start">
              <FaEnvelope className="me-3 text-danger mt-1" />
              <div>
                <h6 className="fw-bold mb-1">Email Us</h6>
                <p className="text-muted mb-0">
                  <a
                    href="mailto:info@savannagrocery.ca"
                    className="text-muted text-decoration-none"
                  >
                    info@savannagrocery.ca
                  </a>
                </p>
              </div>
            </div>
            <div className="d-flex gap-3 mt-4">
              <a
                href="https://facebook.com/savannahhalal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="social-icon"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="social-icon"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="social-icon"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-7">
            <form className="row g-3">
              <div className="col-md-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="form-control"
                  required
                />
              </div>
              <div className="col-md-6">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="form-control"
                  required
                />
              </div>
              <div className="col-12">
                <input
                  type="text"
                  placeholder="Subject"
                  className="form-control"
                  required
                />
              </div>
              <div className="col-12">
                <textarea
                  rows="5"
                  placeholder="Message"
                  className="form-control"
                  required
                ></textarea>
              </div>
              <div className="col-12 text-start">
                <button
                  type="submit"
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
                  }}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
