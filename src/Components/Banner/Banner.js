import React, { useState } from "react";
import DynamicPosts from "../DynamicPosts/DynamicPosts";

import "./Banner.css";

function Banner() {
  let [category, setCategory] = useState();
  
  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        <div className="menuBar">
          <div className="categoryMenu">
            <select
              name="Category"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              {" "}
              <option value="null">ALL CATEGORIES</option>
              <option value="Medicines">Medicines</option>
              <option value="Shoes">Shoes</option>
              <option value="Electronics">Electronics</option>
              <option value="Clothes">Clothes</option>
              <option value="Food">Food</option>
              <option value="Consumables">Consumables</option>
              <option value="Beauty">Beauty</option>


            </select>
          </div>
          <div className="otherQuickOptions">
            <span onClick={()=>setCategory("Medicines")}>Medicines</span>
            <span onClick={()=>setCategory("Shoes")}>Shoes</span>
            <span onClick={()=>setCategory("Electronics")}>Electronics</span>
            <span onClick={()=>setCategory("Clothes")}>Clothes</span>
            <span onClick={()=>setCategory("Food")}>Food</span>
            <span onClick={()=>setCategory("Consumables")}>Consumables</span>
            <span onClick={()=>setCategory("Beauty")}>Beauty</span>


          </div>
        </div>
        <div className="banner">
          <img src="https://source.unsplash.com/970x240/?college,marketplace" alt="" />
        </div>
      </div>
     { category!=null && <DynamicPosts category={category}/>  }
    </div>
  );
}

export default Banner;
