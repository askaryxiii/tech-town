import { useDispatch } from "react-redux";
import { addToCart } from "../../../features/cart/cartSlice";

export const AddToCart = ({ documentId, title, price, specs }) => {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() =>
        dispatch(
          addToCart({
            id: documentId,
            name: title,
            price: price,
            specs: specs,
          })
        )
      }
      className="uppercase cursor-pointer relative text-gray-600 hover:text-gray-700 after:bg-gray-700 after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 transition-all duration-300">
      Add To Cart
    </button>
  );
};
