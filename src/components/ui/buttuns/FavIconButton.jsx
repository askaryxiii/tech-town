import { RiHeartAdd2Fill } from "react-icons/ri";

export const FavIconButton = () => {
  return (
    <button className="bg-[#2c2c2c] h-11 w-10 rounded-xl cursor-pointer flex items-center justify-center">
      <RiHeartAdd2Fill className="text-white text-xl" />
    </button>
  );
};
