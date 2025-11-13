import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import "../App.css";

const Navbar = () => {
   
  return (
    <header className="navbar navbar-expand-md navbar-dark  position-sticky top-0 w-100 shadow-sm ">
      <div className="container-fluid r">
        <NavLink className="navbar-brand fw-bold fs-2 text-white " to="/">
         🎧SONY
        </NavLink>

        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
          aria-controls="navbarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

       
        <div className="collapse navbar-collapse justify-content-end" id="navbarMenu">
          <ul className="navbar-nav mb-2 mb-md-0 gap-md-4 text-center">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active-menu" : ""}`
                }
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active-menu" : ""}`
                }
              >
                Shop
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active-menu" : ""}`
                }
              >
                Contact
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  `nav-link d-flex align-items-center justify-content-center ${
                    isActive ? "active-menu" : ""
                  }`
                }
              >
                 My Cart
              </NavLink>
            </li>
            <li><NavLink to="/login">
                <button className="btn btn-success">
                    Login
                </button>
                </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
