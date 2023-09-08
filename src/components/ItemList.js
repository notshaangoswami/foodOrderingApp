import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSice";

const Itemlist = ({ itemData }) => {
  //console.log(itemData);
  const dispatch = useDispatch();
  const handleAddItems = (item) => {
    //dispatch and action
    console.log(item);

    dispatch(addItem(item));
  };

  return (
    <div>
      {itemData.map((list) => (
        <div
          key={list.card.info.id}
          className="m-2 p-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{list.card.info.name}</span>
              <span>
                - ₹
                {list.card.info.defaultPrice / 100 ||
                  list.card.info.price / 100}
              </span>
            </div>
            <p className="text-xs">{list.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                className="bg-white text-green-700 p-2 mx-16 rounded-lg shadow-lg"
                onClick={() => handleAddItems(list)}
              >
                Add +
              </button>
            </div>
            <img
              src={CDN_URL + list.card.info.imageId}
              className="w-full"
            ></img>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Itemlist;
