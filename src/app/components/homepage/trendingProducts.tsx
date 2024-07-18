import React from "react";
import ProductCard from "../productCard";

const TrendingProducts = () => {
  const products = [
    {
      name: "Sharee",
      price: "1920",
      image: "/images/sharee_2.jpg",
    },
    {
      name: "Panjabi",
      price: "2920",
      image: "/images/panjabi_2.jpg",
    },
    {
      name: "Three Piece",
      price: "3920",
      image: "/images/threepcs_2.jpg",
    },
    {
      name: "Sharee",
      price: "1920",
      image: "/images/sharee_2.jpg",
    },
    {
      name: "Panjabi",
      price: "2920",
      image: "/images/panjabi_2.jpg",
    },
    {
      name: "Three Piece",
      price: "3920",
      image: "/images/threepcs_2.jpg",
    },
  ];
  return (
    <div className="p-10">
      <h1 className="md:text-4xl text-3xl pb-2 md:text-left text-center md:pl-32 text-red-500 font-bold">Trending Products for You!</h1>
      <div className="flex justify-start md:pl-32">
        <hr className="border-t-2 border-red-400 w-96" />
      </div>
      <div className="flex justify-center pt-10">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <ProductCard key={index} props={{ product }} />
          ))}
        </div>
      </div>
    </div>


  );
};

export default TrendingProducts;
