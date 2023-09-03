import RestaurantCard from "./RestaurantCard";
//import React from "react";
//import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  const [listOfRestraunts, setListOfRestraunts] = useState([]);
  const [filteredListOfRestraunts, setFilteredListOfRestraunts] = useState([]);
  const [searchText, setSearchText] = useState("");

  let handleClick = () => {
    const filteredList = listOfRestraunts.filter(
      (res) => res.info.avgRating > 4.0
    );
    console.log(filteredList);
    setListOfRestraunts(filteredList);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    let resList =
      json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    //console.log(resList);
    setListOfRestraunts(resList);
    setFilteredListOfRestraunts(resList);
  };

  if (listOfRestraunts.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            className="search-box"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              //console.log(searchText);
              const filteredList = listOfRestraunts.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredListOfRestraunts(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button className="filter-btn" onClick={handleClick}>
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {filteredListOfRestraunts.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};
export default Body;
