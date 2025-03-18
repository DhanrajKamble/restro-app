"use client";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const RestaurantHeader = () => {
  const [details, setDetails] = useState();
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    let data = localStorage.getItem("restaurantUser");
    if (!data && pathName == "/restaurant/dashboard") {
      router.push("/restaurant");
    } 
    else if(data && pathName == "/restaurant"){
      router.push("/restaurant/dashboard");
    }
    else {
      setDetails(JSON.parse(data));
    }
  }, []);

  const logout = () =>{
    localStorage.removeItem("restaurantUser");
    router.push("/restaurant");
  }

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
          {details && details.name ? (
            <>
              <li><button onClick={logout}>Logout</button></li>
              <li ><Link href="/">Profile</Link></li>
            </>
          ) : (
            <li>
              <Link href="/">Login/SignUp</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantHeader;
