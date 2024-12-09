import React, { useState } from 'react';
import Rating from '../components/Rating';

export default function WriteReview() {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setText('');
  };

  return (
    <form
      method="post"
      onSubmit={handleSubmit}
      className="container my-5 d-flex flex-column justify-around border p-4 mx-auto"
    >
      <Rating />
      <textarea
        className="form-control mb-3"
        name="review"
        autoFocus={true}
        rows={12}
        placeholder="A few things to consider in your review"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button className="btn btn-warning mx-auto px-5 py-2 text-white">Post Review</button>
    </form>
  );
}
