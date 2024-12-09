import React from 'react';
import restaurant from '../assets/image/restaurant.jpg';

export default function Footer() {
  return (
    <footer className="text-center text-light py-5 bg-success">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-3 text-center">
            <img
              src={restaurant}
              alt="restaurant"
              className="img-fluid rounded"
              style={{ height: "18rem", width: "auto" }}
            />
          </div>

          <div className="col-md-3">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="py-2">About</li>
              <li className="py-2">Menu</li>
              <li className="py-2">Reservations</li>
              <li className="py-2">Order Online</li>
            </ul>
          </div>

          <div className="col-md-3 text-center text-md-start">
            <h5 className="fw-bold">Contact Us</h5>
            <p>
              Little Lemon <br />
              331 E Chicago <br />
              LaSalle Street, Chicago, <br />
              Illinois 60602 <br />
              USA
            </p>
          </div>

          <div className="col-md-3">
            <h5 className="fw-bold">Follow Us</h5>
            <ul className="list-unstyled">
              <li className="py-2">
                <a
                  href="https://www.facebook.com/littlelemon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light text-decoration-none"
                >
                  Facebook
                </a>
              </li>
              <li className="py-2">
                <a
                  href="https://www.instagram.com/littlelemon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light text-decoration-none"
                >
                  Instagram
                </a>
              </li>
              <li className="py-2">
                <a
                  href="https://twitter.com/littlelemon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light text-decoration-none"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-4 border-light" />
        <p className="m-0">2013-2023 © Little Lemon. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
