import Link from "next/link";
import React from "react";

const RestaurantHeader = () => {
  return (
    <div className="header-wrapper">
      <div className="logo">
        <img
          className="logo-img"
          src="https://static.vecteezy.com/system/resources/previews/008/687/818/non_2x/food-delivery-logo-free-vector.jpg"
          alt="logo"
        />
      </div>
      <div>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Login/SignUp</Link>
          </li>
          <li>
            <Link href="/">Profile</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RestaurantHeader;
