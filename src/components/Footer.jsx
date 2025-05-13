import React from "react";
import footerLogo from "../assets/images/footer-logo.png";
import { FiPhone } from "react-icons/fi";
import { PiMapPinThin } from "react-icons/pi";
import { TbSend } from "react-icons/tb";

function Footer() {
  return (
    <footer className="main-footer">
      <div className="auto-container">
        <div className="footer-top">
          <div className="widget-section">
            <div className="row clearfix">
              {/* Column 1 */}
              <div className="col-lg-4 col-md-6 footer-column">
                <div className="footer-widget logo-widget">
                  <figure className="footer-logo">
                    <a href="/">
                      <img src={footerLogo} alt="Savannah Footer Logo" />
                    </a>
                  </figure>
                  <div className="text">
                    <p>
                      Savannah Halal Meat & Grocery Store is your trusted
                      neighborhood source for fresh halal meat, quality
                      groceries, and everyday essentials — all under one roof.
                      Clean, fast, and customer-first.
                    </p>
                  </div>
                </div>
              </div>

              {/* Column 2 */}
              <div className="col-lg-4 col-md-6 footer-column">
                <div className="footer-widget contact-widget">
                  <ul className="info clearfix">
                    <li className="d-flex mb-4">
                      <div className="footer-icon-wrapper me-3">
                        <FiPhone className="footer-icon" />
                      </div>
                      <div className="d-flex flex-column justify-content-center">
                        <p className="mb-1">Call Us</p>
                        <h5 className="mb-0">
                          <a href="tel:+1 234 567 890">+1 234 567 890</a>
                        </h5>
                      </div>
                    </li>

                    <li className="d-flex mb-4">
                      <div className="footer-icon-wrapper me-3">
                        <PiMapPinThin className="footer-icon" />
                      </div>
                      <div className="d-flex flex-column justify-content-center">
                        <p className="mb-1">Address</p>
                        <h5 className="mb-0">
                          9052 46 St NE, Calgary, AB T3J 4E4, Canada
                        </h5>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Column 3 */}
              <div className="col-lg-4 col-md-6 footer-column">
                <div className="footer-widget newsletter-widget">
                  <div className="widget-title">
                    <h6>Newsletter</h6>
                  </div>
                  <div className="widget-content">
                    <p>
                      Get exclusive deals, updates on fresh stock, and weekly
                      offers in your inbox.
                    </p>
                    <form className="newsletter-form">
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          required
                        />
                        <button type="submit" aria-label="Subscribe">
                          <TbSend />
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom clearfix">
          <div className="copyright pull-left">
            <h5>
              &copy; 2025 Copyright{" "}
              <a href="/">Savannah Halal Meat & Grocery Store</a>. All rights
              reserved.
            </h5>
          </div>
          <ul className="footer-nav pull-right clearfix">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
