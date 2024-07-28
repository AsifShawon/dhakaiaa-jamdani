import React from 'react'
import TopBar from './TopBar'
import ProductCard from '../productCard';

const ShopSection = () => {
  const products = [
    {
      name: "Sharee",
      price: "1920",
      image: "/images/sharee_1.jpg",
      discount: 0,
    },
    {
      name: "Panjabi",
      price: "2920",
      image: "/images/panjabi_1.jpg",
      discount: 10,
    },
    {
      name: "Three Piece",
      price: "3920",
      image: "/images/threepcs_1.jpg",
      discount: 10,
    },
    {
      name: "Sharee",
      price: "1920",
      image: "/images/sharee_2.jpg",
      discount: 0,
    },
    {
      name: "Panjabi",
      price: "2920",
      image: "/images/panjabi_2.jpg",
      discount: 10,
    },
    {
      name: "Three Piece",
      price: "3920",
      image: "/images/threepcs_2.jpg",
      discount: 0,
    },
  ];

  return (
    <div>
      <div className="container">
      <div className="flex justify-center pt-10">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <ProductCard key={index} props={{ product }} />
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}

export default ShopSection
