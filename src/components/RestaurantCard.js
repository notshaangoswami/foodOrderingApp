import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { resName, cusine, rating } = resData;
  return (
    <div className="res-card">
      <img className="res-logo" alt="res-logo" src={CDN_URL} />
      <h1>{resName}</h1>
      <h2>{cusine}</h2>
      <h3>{rating}</h3>
    </div>
  );
};
export default RestaurantCard;
