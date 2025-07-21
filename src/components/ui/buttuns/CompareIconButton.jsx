import { TbArrowsShuffle } from "react-icons/tb";
import { Link } from "react-router-dom";

export const CompareIconButton = () => {
  return (
    <button className="cursor-pointer flex items-center bg-gray-400 hover:bg-gray-500 transition-all ease-in p-1 rounded-md">
      <TbArrowsShuffle className="text-white text-xl" />
    </button>
  );
};
