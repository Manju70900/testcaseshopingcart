import React from "react";
import "./Checkout.css";
import Subtotal from "../Subtotal/Subtotal";
import { useStateValue } from "../Apis/StateContext";
import CheckoutProduct from "../checkoutproduct/Checkoutproduct";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        

        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your shopping Cart</h2>

          {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.name}
              image={item.image}
              price={item.price}
              
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        {/* <Subtotal /> */}
      </div>
    </div>
  );
}

export default Checkout;
