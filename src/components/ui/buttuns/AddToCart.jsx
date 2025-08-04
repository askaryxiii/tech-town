import { useDispatch } from "react-redux";
import { addToCart } from "../../../features/cart/cartSlice";
import { IoCart } from "react-icons/io5";

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
      className="bg-[#2c2c2c] h-11 uppercase cursor-pointer text-white text-sm font-semibold rounded-xl flex justify-center items-center gap-3 col-span-7">
      <IoCart className="w-5 h-5" />
      Add to Cart
    </button>
  );
};
