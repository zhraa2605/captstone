import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const options = [' ', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00'];
const occations = [' ', 'Anniversary', 'Birthday'];

export default function BookingForm() {
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('');
  const [number, setNumber] = useState('0');
  const [occation, setOccation] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/confirmation', {
      state: { bookingDate, bookingTime, number, occation },
    });
  };

  return (
    <section className="container py-5">
      <div className="text-center mb-5">
        <span className="display-4 font-serif" style={{ color: '#F4CE14' }}>
          Little Lemon
        </span>
        <p className="h3 text-white font-serif" style={{ color: '#EDEFEE' }}>
          FIND A TABLE
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="bg-light p-4 rounded shadow-lg mx-auto w-75">
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label text-white">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="form-control"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              style={{ backgroundColor: '#F0F0F0' }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label text-white">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="form-control"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              style={{ backgroundColor: '#F0F0F0' }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label text-white">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ backgroundColor: '#F0F0F0' }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="date" className="form-label text-white">
              Date
            </label>
            <input
              type="date"
              id="date"
              className="form-control"
              value={bookingDate}
              onChange={(e) => setBookingDate(e.target.value)}
              style={{ backgroundColor: '#F0F0F0' }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="time" className="form-label text-white">
              Choose Time
            </label>
            <select
              id="time"
              className="form-select"
              value={bookingTime}
              onChange={(e) => setBookingTime(e.target.value)}
              style={{ backgroundColor: '#F0F0F0' }}
            >
              {options.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="guests" className="form-label text-white">
              Number of Guests
            </label>
            <input
              type="number"
              id="guests"
              className="form-control"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              min="1"
              max="10"
              style={{ backgroundColor: '#F0F0F0' }}
            />
          </div>
          <button
            type="submit"
            className="btn"
            style={{ backgroundColor: '#F4CE14', color: '#495E57', fontWeight: 'bold', width: '100%' }}
          >
            Make Your Reservation
          </button>
        </div>
      </form>
    </section>
  );
}
