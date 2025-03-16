"use client";
import React, { useState } from "react";
import RestaurantHeader from "../_components/RestaurantHeader";
import Footer from "../_components/Footer";
import RestaurantLogin from "../_components/RestaurantLogin";
import RestaurantSighUp from "../_components/RestaurantSignUp";
import './style.css'

const Restaurant = () => {
  const [login, setLogin] = useState(true);
  return (
    <div className="container">
        <RestaurantHeader />
      <h1>Restaurant Login/SignUp Page</h1>
      {login ? <RestaurantLogin /> : <RestaurantSighUp />}

      <button className="button-link" onClick={() => setLogin(!login)}>
        {login ? "do not have Account ? SighUp" : "Already have Account? Login"}
      </button>
      <Footer />
    </div>
  );
};

export default Restaurant;
