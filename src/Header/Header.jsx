import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../Apis/StateContext";
import  {AiOutlineShoppingCart} from 'react-icons/ai'

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  
  
  return (
    <div className="header">
      <Link to="/">
        <div className="header__logo"> TeeRex Store</div>
      </Link>
     

     

      

      <Link to="/check">
        <div className="header__optionBasket">
         <AiOutlineShoppingCart/>
          <span className="header__optionLineTwo header__basketCount">
            {basket?.length}
          </span>
        </div>
      </Link>
    </div>
  );
}

export default Header;
