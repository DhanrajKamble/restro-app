"use client";
import React, { useState } from "react";
import RestaurantLogin from "../_components/restaurantLogin";
import RestaurantSighUp from "../_components/restaurantSignUp";

const Restaurant = () => {
  const [login, setLogin] = useState(true);
  return (
    <div className="container">
      <h1>Restaurant Login/SignUp Page</h1>
      {login ? <RestaurantLogin /> : <RestaurantSighUp />}

      <button className="button-link" onClick={() => setLogin(!login)}>
        {login ? "do not have Account ? SighUp" : "Already have Account? Login"}
      </button>
    </div>
  );
};

export default Restaurant;
