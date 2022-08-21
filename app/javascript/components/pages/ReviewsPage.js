import React from "react";
import ReactStars from "react-stars";
import moment from "moment";

const ReviewsPage = ({ reviews, admin, product }) => {
  const ReviewTemplate = ({ review }) => {
    return (
      <div class="flex flex-row">
      <div>
        <ReactStars
          count={5}
          size={24}
          value={review.stars}
          edit={false}
          color2={"#ffd700"}
          half={false}
        />
        <div>
          <a
            href={`/users/${review.user_id}`}
            className="text-xl hover:text-orange-500"
          >
            @{review.username}
          </a>
          <span> posted {moment(review.created_at).fromNow()}</span>
          <h5 className="pt-5">{review.comment}</h5>
        </div>
        <div className="border-b pt-4"/>
      </div>

      { admin && <a href={`/products/${product.id}/reviews/${review.id}/edit`}>Edit</a>}
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-10 py-11 px-20">
      {reviews.map((review) => (
        <ReviewTemplate review={review} />
        
      ))}
    </div>
  );
};

export default ReviewsPage;
