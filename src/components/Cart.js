import Itemlist from "./ItemList";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSice";

const Cart = () => {
  const items = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  //console.log(items);
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center  p-4 m-4">
      <h1 className="font-bold">Cart Page</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        <Itemlist itemData={items} />
      </div>
    </div>
  );
};
export default Cart;
