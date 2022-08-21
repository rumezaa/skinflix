import React from "react";
import ReactStars from "react-stars";
import Default from "../../../assets/images/placeholder.jpeg"

const HorizontalProductCard = ({ product }) => {
  return (
    <div className="flex flex-row w-full items-center justify-center lg:justify-between  border-b py-3">
      <div className="flex flex-row gap-5 lg:gap-10 items-center">
        <div className="flex flex-row">
          <a
            className="w-48 h-48 lg:w-64 lg:h-64 bg-contain bg-no-repeat"
            href={`/products/${product.id}`}
            style={{
              backgroundImage: `url('${product.image || Default}')`,
            }}
          >
            <div className="flex items-center justify-center font-semibold text-2xl opacity-0 hover:bg-opacity-50 hover:opacity-100 bg-black py-20 text-center text-white w-full h-full">
              <h2>{product.name}</h2>
            </div>
          </a>

          <h2 className="lg:text-3xl text-2xl">${Number(product.price).toFixed(2)}</h2>
        </div>

        <div className="flex flex-col">
          <ReactStars
            count={5}
            size={24}
            value={product.average_rating}
            edit={false}
            color2={"#ffd700"}
            half={false}
          />
          <h2 className="break-words text-xs lg:text-base w-48 lg:w-64 italic opacity-75 md:pr-5 lg:pr-0">
            "
            {product.description.length > 100 &&
              `${product.description.substring(0, 100)}...`}
            "
          </h2>
        </div>
      </div>

      <a
        className="rounded-full px-10 py-4 bg-blueblue text-white font-semibold"
        href={`/products/${product.id}`}
      >
        View Details
      </a>
    </div>
  );
};

export default HorizontalProductCard;
