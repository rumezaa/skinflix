import React, { useState } from "react";
import ReactStars from "react-stars";

const ReviewForm = ({ token, product, review, admin }) => {
    const [ stars, setStars ] = useState(review?.stars || 0)
  return (
    <div className="flex gap-3 flex-col px-10 py-10">
    <div className="flex flex-row justify-between">
        <h2 className="text-lg font-semibold">Write a Review</h2>
        <a href={`/products/${product.id}/reviews`}>X</a>
    </div>
    <form
      action={!!review && `/products/${product.id}/reviews/${review.id}` || `/products/${product.id}/reviews`}
      accept-charset="UTF-8"
      method={"post"}
      className="flex flex-col"
    >
    {!!review && <input type="hidden" name="_method" value="patch" autocomplete="off" />}
      <input
        type="hidden"
        name="authenticity_token"
        value={token}
        autocomplete="off"
      />

      <label for="review_stars">Stars</label>
      
      <ReactStars
          half={false}
          count={5}
          size={24}
          onChange={(star) => setStars(star)}
          value={stars}
          color2={"#ffd700"}
        />
      <input type="hidden" name="review[stars]" id="review_stars" value={stars} />

    <div className="flex flex-col py-4 gap-2">
    <label for="review_comment">Comment</label>
      <textarea
        placeholder="I like this product"
        name="review[comment]"
        id="review_comment"
        defaultValue={review?.comment}
        className="outline-none border h-20"
      ></textarea>
    </div>
      
    <div className="flex flex-row justify-center py-5 items-center">
    <input
        type="submit"
        name="commit"
        value="Post Review"
        data-disable-with="Post Review"
        className="py-3 px-5 rounded-full"
      />

    </div>
     
    </form>
    </div>
  );
};

export default ReviewForm;
