import React from "react";
import axios from "axios";
import Favourite from "../products/Favourites";

const ProductPage = ({ product, avg_stars, reviews, token}) => {

  
  return (
    <div className="grid grid-cols-2">

            
      <div className="w-full h-screen mb-5 items-center">
        <div
          style={{
            backgroundImage: `url(${require(`../../../assets/images/${product.image_file_name}`)})`,
          }}
          className="h-full w-full bg-contain bg-no-repeat bg-center p-8 "
        />
      </div>

      <div className="flex flex-col py-20 gap-20">
        <div>
          <h1 className="text-2xl ">{product.name}</h1>
          <a className="pt-2" href={`/products/${product.id}/reviews`}>{reviews}</a>
        </div>
        <div>
          <h1 className="text-2xl" >${product.price}</h1>
        </div>
        <div>
          <h1 className="text-xl">{product.description}</h1>
        </div>
          <Favourite  token={token} product={product}/>
        <div>
          <a className="rounded bg-gray-200 py-4 px-2" href={`/products/${product.id}/reviews/new`}>Write a Review</a>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
