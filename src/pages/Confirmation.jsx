import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Confirmation() {
  const location = useLocation();
  return (
    <div className="container text-center py-5">
      <h1 className="mb-4">Your Reservation is Confirmed!</h1>
      <div className="mb-3">
        <strong>Booking Date: </strong>{location.state.bookingDate}
      </div>
      <h4 className="text-success mb-3">A confirmation message has been sent to your email.</h4>
      <h4 className="text-primary">Thanks for dining with us!</h4>
    </div>
  );
}
