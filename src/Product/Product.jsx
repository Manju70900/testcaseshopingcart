import React from "react";
import "./Product.css";
import {useStateValue} from "../Apis/StateContext"

function Product({ id, name, image, price, color }) {

    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
      // dispatch the item into the data layer
      dispatch({
        type: "ADD_TO_BASKET",
        item: {
          id: id,
         name:name,
          image: image,
          price: price,
         color:color
        },
      });
    };
  return (
    <section className="product_container">
      <div className="product" key={id}>
        <div className="product__info">
          <h4>{name}</h4>
        </div>

        <img src={image} alt="img" />
        <span
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <p className="product__price">
            <bold>Rs</bold>
            <strong>{price}</strong>
          </p>

          <button onClick={addToBasket}>Add to Basket</button>
        </span>
      </div>
    </section>
  );
}

export default Product;
