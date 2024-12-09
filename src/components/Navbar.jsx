import React from 'react';
import logo from '../assets/image/logo-navbar.png';
import { Link } from 'react-router-dom';
import { LiaBarsSolid } from 'react-icons/lia';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
      <div className="container">
        {/* Logo */}
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Little Lemon Logo" className="img-fluid" style={{ width: "10rem" }} />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <LiaBarsSolid className="navbar-toggler-icon" size="1.5rem" />
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto d-flex justify-content-end">
            <li className="nav-item">
              <Link to="/about" className="nav-link fw-bold">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/menu" className="nav-link fw-bold">
                Menu
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/reservations" className="nav-link fw-bold">
                Reservations
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/orderonline" className="nav-link fw-bold">
                Order Online
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/writereview" className="nav-link fw-bold">
                Write a Review
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
