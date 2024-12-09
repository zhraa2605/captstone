import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

export default function Rating() {
  const [rate, setRate] = useState(null);

  return (
    <div className="d-flex">
      {[...Array(5)].map((item, index) => {
        const givenRating = index;
        return (
          <label key={index} className="me-2">
            <input
              type="radio"
              className="d-none"
              value={givenRating}
              onClick={() => setRate(givenRating)}
            />
            <FaStar
              size={28}
              color={givenRating <= rate ? 'rgb(244,206,20)' : 'rgb(192,192,192)'}
              style={{ cursor: 'pointer' }}
            />
          </label>
        );
      })}
    </div>
  );
}
