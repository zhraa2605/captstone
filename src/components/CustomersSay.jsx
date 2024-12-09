import React from 'react';

const customers = [
  {
    name: 'Sophia L.',
    testimonial:
      '"The ambiance was perfect and the food was out of this world! I loved every bite and the service was top-notch. I can’t wait to come back!"',
    getImageSrc: () => require('../assets/image/testimonial/sophialewis.jpeg'),
  },
  {
    name: 'David M.',
    testimonial:
      '"I took my friends here for a night out and we were all thoroughly impressed. The dishes were beautifully plated and the flavors were incredible. Highly recommend!"',
    getImageSrc: () => require('../assets/image/testimonial/davidmorris.jpeg'),
  },
  {
    name: 'Lucas P.',
    testimonial:
      '"A fantastic dining experience! The food was delicious, the drinks were amazing, and the service was beyond friendly. A true gem in the city!"',
    getImageSrc: () => require('../assets/image/testimonial/lucasperez.jpeg'),
  },
];

export default function CustomersSay() {
  const imageStyle = {
    width: '100%',
    height: '200px',  // Fixed height for images
    objectFit: 'fill', // Ensures the image fills the space without distortion
  };

  const cardStyle = {
    height: '100%', // Ensures card fills its container
  };

  return (
    <div className="py-5 bg-success text-light">
      <h2 className="text-center text-warning fw-bold display-4 mb-5">
        What Our Customers Say!
      </h2>
      <div className="container">
        <div className="row g-4">
          {customers.map((customer, index) => (
            <div className="col-md-4" key={index}>
              <div className="card bg-warning text-dark h-100 shadow" style={cardStyle}>
                <img
                  src={customer.getImageSrc()}
                  alt={customer.name}
                  className="card-img-top"
                  style={imageStyle} // Apply the inline styles for the image
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">{customer.name}</h5>
                  <p className="card-text">{customer.testimonial}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
