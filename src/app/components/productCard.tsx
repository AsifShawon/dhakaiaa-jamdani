import Image from "next/image";
import React from "react";

const ProductCard = ({ props }: { props: any }) => {
  const { product } = props;
  return (
    <div className="card card-compact bg-base-100 md:h-[470px] h-[350px] md:max-w-[380px] max-w-[320px] min-w-[280px] min-h-[270px] shadow-xl">
      <figure>
        <Image
          height={300}
          width={400}
          style={{ objectFit: "cover" }}
          src={product.image}
          alt={product.name}
          className="max-h-96"
        />
      </figure>
      <div className="card-body bg-cyan-800 rounded-2xl absolute md:top-[370px] top-[270px] w-full h-[100px]">
        <div className="text-white flex justify-between items-center">
          <div>
            <h2 className="card-title">{product.name}</h2>
            <p className="text-white">${product.price}</p>
          </div>
          <Image
            src="/images/add-cart.png"
            alt="Add to cart"
            height={50}
            width={50}
            style={{ cursor: "pointer" }}
            className="bg-white p-2 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
