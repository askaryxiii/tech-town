import { RiHeartAdd2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

export const FavIconButton = () => {
  return (
    <button className="cursor-pointer flex items-center group bg-gray-400 hover:bg-gray-500 transition-all ease-in p-1 rounded-md">
      <RiHeartAdd2Line className="text-white text-xl" />
    </button>
  );
};
