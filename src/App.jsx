
import React,{useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from './Header/Header';
import Home from "./Home/Home";
import Product from './Product/Product';
import { useStateValue  } from './Apis/StateContext';
import CheckoutProduct from './checkoutproduct/Checkoutproduct';
import Checkout from './checkout/Checkout';




const App = () => {
  const [{ basket }, dispatch] = useStateValue();



  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
       <Routes>
        <Route path="/checkout" element={<Product />} />
      </Routes>
      <Routes>
        <Route path="/check" element={<Checkout/>} />
      </Routes>
    </Router>
  );
}

export default App


