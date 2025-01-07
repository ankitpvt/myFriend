import React from "react";
import "./CartoonImage.css";
import img from "../images/image.JPG"

const CartoonImage = ({ reaction }) => {
  const reactionToImage = {
    "😂": img,
    "😐": img,
    "🙄": img
  };

  return (
    <div className="cartoon-image">
      <img
        src={reactionToImage[reaction] || img}
        alt="Cartoon"
      />
    </div>
  );
};

export default CartoonImage;
