import React from "react";
import Default from "../../../assets/images/placeholder.jpeg"

const ProductCard = ({ product }) => {
  return (
    <div className="flex flex-col">
      <a
        className="flex flex-col w-56 h-96 md:48 items-center"
        href={`/products/${product.id}`}
      >
        <div
          style={{
            backgroundImage: `url(${product.image || Default})`
          }}
          className="h-full w-full bg-contain bg-no-repeat bg-center "
        >
          <div className="flex items-center justify-center font-semibold text-2xl opacity-0 hover:bg-opacity-50 hover:opacity-100 bg-black py-20 text-center text-white w-full h-full">
            <h2>{product.name}</h2>
          </div>
        </div>
        <div>
          <h3>${Number(product.price).toFixed(2)}</h3>
        </div>
      </a>
    </div>
  );
};

export default ProductCard;
