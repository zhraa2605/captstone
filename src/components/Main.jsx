import React from 'react';
import { Link } from 'react-router-dom';
import food from '../assets/image/food.jpg';

export default function Main() {
  return (
    <div className="bg-success py-5 text-light">
      <div className="container d-flex flex-wrap align-items-center justify-content-between">
        {/* Text Section */}
        <div className="mb-4">
          <h1 className="text-warning fw-bold display-4">Little Lemon</h1>
          <h2 className="text-light fw-bold fs-2">Chicago</h2>
          <p className="mt-4">
            We are a family-owned Mediterranean restaurant, focused on traditional
            recipes served with a modern twist.
          </p>
          <Link to="/reservations" className="btn btn-warning fw-bold">
            Reserve a Table
          </Link>
        </div>

        {/* Image Section */}
        <div className="d-none d-md-block">
          <img src={food} alt="Delicious food" className="img-fluid rounded" style={{ width: "24rem", height: "24rem" }} />
        </div>
      </div>
    </div>
  );
}
