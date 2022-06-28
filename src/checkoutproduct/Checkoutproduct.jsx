import React from "react";
import "./Checkoutproduct.css";
import { useStateValue } from "../Apis/StateContext";

function CheckoutProduct({ id, image, name, price, color, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();
  console.log(basket)
  console.log(image)

  const removeFromBasket = () => {
    
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <p>{ id}</p>
      <img  src={image}  alt="img"/>

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{name}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        
       
        {!hideButton && (
          <button onClick={removeFromBasket}>Remove from cart</button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
