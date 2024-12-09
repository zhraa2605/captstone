import React from 'react';
import { Heading, Image, Text, HStack } from '@chakra-ui/react';
import { MdDeliveryDining } from 'react-icons/md';

export default function FoodCard({ name, description, imageSrc, price }) {
  return (
    <div className="card w-96 bg-[#D9D9D9] rounded-lg m-4 shadow-sm">
      {/* Image */}
      <Image
        src={imageSrc}
        alt={name}
        className="card-img-top rounded-t-lg"
        style={{ height: '20rem', objectFit: 'cover' }}
      />

      <div className="card-body d-flex flex-column justify-between" style={{ height: '14rem' }}>
        {/* Header Section */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <Heading size="md" className="card-title mb-0">{name}</Heading>
          <Text className="text-center text-[#EE9972] font-weight-bold">{price}</Text>
        </div>
        
        {/* Description */}
        <Text className="card-text mb-3">{description}</Text>

        {/* Order Button */}
        <HStack spacing={2} className="font-weight-bold">
          <button className="btn btn-warning d-flex align-items-center">
            Order a Delivery
            <MdDeliveryDining className="ms-2" />
          </button>
        </HStack>
      </div>
    </div>
  );
}
