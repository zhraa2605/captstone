import React from 'react';
import star from '../assets/image/testimonial/star.png';

export default function ReviewCard({ imageSrc, name, testimonial }) {
  return (
    <div className="card text-center mx-3 shadow-sm" style={{ width: "20rem" }}>
      <div className="card-body">
        {/* Reviewer Image */}
        <img 
          src={imageSrc} 
          alt={name} 
          className="rounded-circle img-fluid mb-3" 
          style={{ width: "8rem", height: "8rem" }} 
        />
        
        {/* Star Ratings */}
        <div className="d-flex justify-content-center mb-3">
          {[...Array(5)].map((_, index) => (
            <img 
              key={index} 
              src={star} 
              alt="star" 
              className="img-fluid" 
              style={{ width: "1.25rem", height: "1.25rem" }} 
            />
          ))}
        </div>

        {/* Reviewer Name */}
        <h5 className="card-title fw-bold">{name}</h5>

        {/* Testimonial */}
        <p className="card-text fst-italic">{testimonial}</p>
      </div>
    </div>
  );
}

