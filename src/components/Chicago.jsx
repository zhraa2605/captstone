import React from 'react';
import image1 from '../assets/image/chicago/images.jpeg';
import image2 from '../assets/image/chicago/images2.jpeg';

export default function Chicago() {
  return (
    <section className="container py-5">
      <div className="row align-items-center">
        {/* Text Content */}
        <div className="col-md-6">
          <h1 className="text-success fw-bold">Little Lemon</h1>
          <h2 className="text-warning py-2">Chicago</h2>
          <p className="fs-5">
            Little Lemon is owned by two Italian brothers, Mario and Adrian, who
            moved to the United States to pursue their shared dream of owning a
            restaurant.<br /><br />
            To craft the menu, Mario relies on family recipes and his experience
            as a chef in Italy. Adrian does all the marketing for the restaurant
            and led the effort to expand the menu beyond classic Italian to
            incorporate additional cuisines from the Mediterranean region.
          </p>
        </div>

        {/* Image Section */}
        <div className="col-md-6 position-relative d-none d-md-block">
          <img
            src={image1}
            alt="image1"
            className="img-fluid position-absolute w-50 h-auto"
            style={{ top: '0', left: '0', zIndex: '2' }}
          />
          <img
            src={image2}
            alt="image2"
            className="img-fluid position-relative w-50 h-auto"
            style={{ top: '50px', left: '120px', zIndex: '1' }}
          />
        </div>
      </div>
    </section>
  );
}
