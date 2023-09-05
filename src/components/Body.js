import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import resList from "../utils/mockData";
const Body = () => {
  const [listOfRestraunts, setListOfRestraunts] = useState(resList);
  const [filteredListOfRestraunts, setFilteredListOfRestraunts] = useState(resList);
  const [searchText, setSearchText] = useState("");

  let handleClick = () => {
    const filteredList = listOfRestraunts.filter(
      (res) => res.info.avgRating > 4.0
    );
    console.log(filteredList);
    setListOfRestraunts(filteredList);
  };

  useEffect(() => {
   // fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    let resList =
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    console.log("before set state", resList);

    setListOfRestraunts(resList);

    setFilteredListOfRestraunts(resList);
  };

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus)
    return (
      <h1>
        Ooopssss!..You seem to have internet connection.Please check your
        internet
      </h1>
    );
  console.log("before shimmer", listOfRestraunts);

  return listOfRestraunts === undefined || listOfRestraunts.length === 0 ? (
    <Shimmer />
  ) : (
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
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
