import React, { useState } from "react";
import DynamicPosts from "../DynamicPosts/DynamicPosts";

import "./Banner.css";

function Banner() {
  let [category, setCategory] = useState();
  
  return (
    <div>
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
              <option value="Medicines">Sports</option>
              <option value="Shoes">Footwear</option>
              <option value="Electronics">Electronics</option>
              <option value="Clothes">Fashion</option>
              <option value="Food">Food</option>
              <option value="Consumables">Appliances</option>
              <option value="Beauty">Beauty</option>


            </select>
          </div>
          {/* <div className="to_point">
            <span className="ss1" onClick={()=>setCategory("Medicines")}>Sports</span>
            <span onClick={()=>setCategory("Shoes")}>Shoes</span>
            <span onClick={()=>setCategory("Electronics")}>Electronics</span>
            <span onClick={()=>setCategory("Clothes")}>Clothes</span>
            <span onClick={()=>setCategory("Food")}>Food</span>
            <span onClick={()=>setCategory("Consumables")}>Consumables</span>
            <span onClick={()=>setCategory("Beauty")}>Beauty</span>


          </div> */}
        </div>
        <div className="banner">
          <img src="https://i.ibb.co/cXvnhnT/deeeeeee.jpg" alt="" />
        </div>
      </div>
     { category!=null && <DynamicPosts category={category}/>  }
    </div>
    </div>
  );
}

export default Banner;
