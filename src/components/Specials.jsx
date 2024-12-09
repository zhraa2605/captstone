import React from 'react';
import FoodCard from './FoodCard';

const specials = [
  {
    name: 'Bruschetta',
    price: '$12.99',
    description:
      'Our Bruschetta is made from homemade grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with fresh vegetables.',
    getImageSrc: () => require('../assets/image/special/bruschetta.jpeg'),
  },
  {
    name: 'Greek Salad',
    price: '$17.99',
    description:
      'The famous Greek salad of crispy lettuce, pepper, olives, and our Chicago-style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    getImageSrc: () => require('../assets/image/special/greeksalad.jpg'),
  },
  {
    name: 'Lemon Cake',
    price: '$7.99',
    description:
      "This comes straight from grandma's recipe book. Every last ingredient has been sourced and is as authentic as can be imagined.",
    getImageSrc: () => require('../assets/image/special/lemoncake.jpg'),
  },
];

export default function Specials() {
  return (
    <div className="container py-5 bg-light">
      <h2 className="text-center mb-4 fw-bold">This Week's Specials!</h2>
      <div className="row gy-4">
        {specials.map((special) => (
          <div key={special.name} className="col-md-4">
            <FoodCard
              name={special.name}
              description={special.description}
              imageSrc={special.getImageSrc()}
              price={special.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
