import Itemlist from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data, showList, setShowIndex,setCheckIndex }) => {
  //const [showList, setShowList] = useState(false);
  const handleClick = () => {
    setShowIndex();
    setCheckIndex();
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer "
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span> ^ </span>
        </div>
        {showList && <Itemlist itemData={data?.itemCards} />}
      </div>
    </div>
  );
};
export default RestaurantCategory;
