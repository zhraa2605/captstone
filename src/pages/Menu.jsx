import React from 'react';
import menu from '../assets/image/menu.png';

export default function Menu() {
  return (
    <div className="container-fluid bg-warning d-flex justify-content-center py-5">
      <img src={menu} className="img-fluid" alt="Menu" />
    </div>
  );
}
