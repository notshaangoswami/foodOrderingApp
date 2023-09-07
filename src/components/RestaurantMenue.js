import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
//import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenue = () => {
  const [showIndex, setShowIndex] = useState(0);
  const[checkIndex,setCheckIndex]=useState(false);
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  //console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  //console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 mx-6 text-2xl">{name}</h1>

      <p className="text-lg font-semibold">
        {cuisines.join(",")}-{costForTwoMessage}
      </p>
      <div>
        {categories.map((resCategory, index) => (
          <RestaurantCategory //controlled Component-Since children is dependent on parent whether to show list or not
            key={resCategory?.card?.card?.title}
            data={resCategory?.card?.card}
            showList={index === showIndex ? checkIndex : false}
            setShowIndex={() => setShowIndex(index)}
            setCheckIndex={()=>setCheckIndex(!checkIndex)}
          />
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenue;
