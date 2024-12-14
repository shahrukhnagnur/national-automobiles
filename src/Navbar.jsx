import React from "react";
import logo from "./images/national automobiles.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <img
          src={logo}
          alt="National Automobiles"
          className="logo"
          height={50}
        />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav m-auto" style={{ gap: 20 }}>
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-link ${
                    isActive ? "active text-danger fw-bold" : "fw-medium"
                  }`
                }
                style={{ textDecoration: "none" }}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `nav-link ${
                    isActive ? "active text-danger fw-bold" : "fw-medium"
                  }`
                }
                style={{ textDecoration: "none" }}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/parts"
                className={({ isActive }) =>
                  `nav-link ${
                    isActive ? "active text-danger fw-bold" : "fw-medium"
                  }`
                }
                style={{ textDecoration: "none" }}
              >
                Parts
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `nav-link ${
                    isActive ? "active text-danger fw-bold" : "fw-medium"
                  }`
                }
                style={{ textDecoration: "none" }}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;