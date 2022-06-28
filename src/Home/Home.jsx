import React, { useState } from "react";
import "./Home.css";
import Product from "../Product/Product";
import json from '../json/product.json';
import {BsSearch}  from 'react-icons/bs'

const Home = () => {
  let [data, setdata] = useState(json);
  let [search, setsearch]=useState("")

  




  return (
    <>
      <div className="search">
        <input
          type="text"
          value={search}
          onChange={e => setsearch(e.target.value)}
          placeholder="Search products"
        />
        <span>
          <BsSearch />
        </span>
      </div>

      <div>
        <label for="color">Color</label>
        <br />
        <input
          type="checkbox"
          value="red"
          onChange={e => setsearch(e.target.value)}
          id="color"
        />
        Red
        <br />
        <input
          type="checkbox"
          value="blue"
          onChange={e => setsearch(e.target.value)}
          id="color"
        />
        Blue
        <br />
        <input
          type="checkbox"
          value="green"
          onChange={e => setsearch(e.target.value)}
          id="color"
        />
        Green
        <br />
      </div>

      <div className="home">
        {data
          .filter(ele => {
            if (search === "") {
              return ele;
            } else if (
              ele.name
                .toLocaleLowerCase()
                .includes(search.toLocaleLowerCase()) ||
              ele.color.toLocaleLowerCase().includes(search.toLocaleLowerCase())
            ) {
              
              return ele;
              setsearch("");
              
            }
          })
          .map(item => {
            return (
              <Product
                id={item.id}
                name={item.name}
                image={item.imageURL}
                color={item.color}
                price={item.price}
              />
            );
          })}
      </div>
    </>
  );
};

export default Home;
