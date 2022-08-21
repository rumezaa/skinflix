import React from "react";
import moment from "moment";
import ReactStars from "react-stars";

const UserActivity = ({ reviews, products }) => {
  return (
    <div className="px-10">
      {reviews.map((review) =>
        products.map(
          (product) =>
            product.id == review.product_id && (
              <h2 className="py-4 border-b">
                You rated <a href={`/products/${product.id}`}>{product.name}</a>{" "}
                <span className="flex flex-row items-center gap-2">
                  <ReactStars
                    count={5}
                    size={24}
                    value={review.stars}
                    edit={false}
                    color2={"#ffd700"}
                  />
                  <span className="font-thin">{moment(review.created_at).fromNow()}</span>
                </span>
                
              </h2>
            )
        )
      )}
    </div>
  );
};

export default UserActivity;
