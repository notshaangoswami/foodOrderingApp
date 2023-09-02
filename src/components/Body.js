import RestaurantCard from "./RestaurantCard";
//import React from "react";
import resList from "../utils/mockData";
import { useState } from "react";
const Body = () => {
  const [listOfRestraunts, setListOfRestraunts] = useState(resList);
  let handleClick = () => {
    const filteredList = listOfRestraunts.filter((res) => res.rating > 4.8);
    setListOfRestraunts(filteredList);

    // console.log("Button Clicked");
  };
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={handleClick}>
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {listOfRestraunts.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
