import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, locality, areaName, avgRating } = resData;
  //console.log(name, locality, areaName);

  return (
    <div className="res-card">
      <img className="res-logo" alt="res-logo" src={CDN_URL} />
      <h1>{name}</h1>
      <h2>{locality}</h2>
      <h3>{areaName}</h3>
      <h4>{avgRating}</h4>
    </div>
  );
};
export default RestaurantCard;
