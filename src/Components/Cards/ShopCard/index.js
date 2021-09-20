import React from 'react'
import "./style.scss"
import shopImage from "../../../Assets/Images/icons/shop.jpg"


const ShopCard = () => {
    return(
      <div className="card-shop"> 
      <img type="image" src= {shopImage}  class="image-shop"></img>
      <p></p>
      <h4 class="image-title"><b>Shop DEV Basics</b></h4>
    </div>
    );
}

export default ShopCard