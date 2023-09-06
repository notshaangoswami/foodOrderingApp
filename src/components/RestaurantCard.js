import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  console.log(props);
  const { resData } = props;
  const {
    name,
    locality,
    avgRating,
    costForTwo,
    cloudinaryImageId,
    cuisines,
    deliveryTime,
  } = resData;
  //console.log(name, locality, areaName);

  return (
    <div className="m-4 p-4 w-[200px] bg-gray-50 rounded-lg hover:bg-gray-200">
      <img className="   rounded-lg" alt="res-logo" src={CDN_URL+cloudinaryImageId} />
      <h1 className="font-bold py-3 text-lg">{name}</h1>
      <h3>{locality}</h3>

      <h3>{cuisines.join(",")}</h3>
      <h3>{avgRating} Stars</h3>
      <h3>{costForTwo}</h3>
      <h3>{deliveryTime}</h3>
    </div>
  );
};
export default RestaurantCard;
