import React from "react";
import logo from "../assets/images/logo.png";

function Header() {
  return (
    <header className="main-header">
      <div className="header-top">
        <div className="auto-container">
          <div className="top-info">
            <ul className="info-list clearfix">
              <li>
                <i className="flaticon-location-pin"></i>
                9052 46 St NE, Calgary, AB T3J 4E4, Canada
              </li>
              <li>
                <i className="flaticon-envelope"></i>
                <a href="mailto:Info@savannagrocery.ca">
                  Info@savannagrocery.cam
                </a>
              </li>
              <li className="phone">
                <i className="flaticon-dial"></i>
                <a href="tel:+1 234 567 890">+1 234 567 890</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="header-upper">
        <div className="auto-container">
          <div className="outer-box clearfix">
            <div className="logo-box">
              <figure className="logo">
                <a href="/">
                  <img src={logo} alt="Carneshop Logo" />
                </a>
              </figure>
            </div>

            <div className="menu-area pull-right">
              <div className="mobile-nav-toggler">
                <i className="icon-bar"></i>
                <i className="icon-bar"></i>
                <i className="icon-bar"></i>
              </div>

              <nav className="main-menu navbar-expand-md navbar-light">
                <div className="collapse navbar-collapse show clearfix">
                  <ul className="navigation scroll-nav clearfix">
                    <li>
                      <a href="#about">About</a>
                    </li>
                    <li>
                      <a href="#services">Services</a>
                    </li>
                    <li>
                      <a href="#shop">Shop</a>
                    </li>
                    <li>
                      <a href="#featured">Premium Products</a>
                    </li>
                    <li>
                      <a href="#contact">Contact</a>
                    </li>
                  </ul>
                </div>
              </nav>

              {/* <ul className="menu-right-content pull-left clearfix">
                <li className="search-box-outer">
                  <button className="search-box-btn" type="button">
                    <span className="flaticon-search"></span>
                  </button>
                </li>
                <li className="nav-box">
                  <div className="nav-btn nav-toggler navSidebar-button clearfix">
                    <i className="flaticon-list"></i>
                  </div>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
