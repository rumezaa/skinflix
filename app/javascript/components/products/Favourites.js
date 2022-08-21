import React, { useEffect, useState } from "react";
import axios from "axios";
import { HeartUnfilled, Heart } from "./Hearts";

const Favourite = ({product, token}) => {
  const [isFavourite, setIsFavourited] = useState(false);
  const [favourites, setFavourites] = useState(null);

  useEffect(() => {
    axios({
      method: "get",
      url: `/users/4/favourites.json`,
    })
      .then((res) => {
        setFavourites(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

      
  }, [favourites]);


  useEffect(
    () => {
      favourites?.map(favourite => favourite.id == product?.id && setIsFavourited(true))
    }
  )

  const url = "/products/1/favourites"
  
  const unfav = () => {
   
  }


  const fav = (e) => {
    e.preventDefault()
    if (isFavourite) {
      axios({
        method: "delete",
        url: "favourites",
        data: {authenticity_token: token}
      }) .then((resp) => {
        console.log("worjof")
        setIsFavourited(false)
      })
      .catch((err) => {
        console.log(err);
      });
      return

    }

    axios({
      method: "post",
      url: `/products/${product.id}/favourites`,
      data: { product: product, authenticity_token: token },
    })
      .then((resp) => {
        console.log(resp)
        setIsFavourited(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }



  return (
    <div onClick={fav}>{(isFavourite && <Heart />) || <HeartUnfilled />}</div>
  );
};

export default Favourite;
