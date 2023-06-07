import React from "react";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

const Card = ({ product, btnColor }) => {
  return (
    <div className="flex flex-col bg-white border-none rounded-md shadow py-4">
      <div className="h-48 w-48 self-center flex items-center justify-center">
        <Image
          className=""
          src={product.images ? product.images[0] : product.image}
          alt="item"
        />
      </div>

      <div className="mt-4 h-32 px-4">
        <div className="flex justify-between mb-4">
          <div
            className={`${btnColor} flex items-center space-x-1 rounded px-3`}
          >
            <span className="text-white mt-1">{product.rating}</span>
            <FaStar className="text-secondary" />
          </div>
          <div className="text-primary text-lg font-bold">{`$${product.price}`}</div>
        </div>
        <h6>{product.name ? product.name : product.intro}</h6>
        <p className="text-sm font-light">
          {product.description ? product.description : product.intro}
        </p>
      </div>
    </div>
  );
};

export default Card;
