import { Link } from "react-router-dom";

export const IconNavList = ({ dist, icon, count }) => {
  return (
    <Link to={dist} className="cursor-pointer inline-flex">
      <div className="relative flex items-center gap-1.5 px-1.5 py-1.5 font-medium text-gray-600 hover:text-gray-700 bg-transparent hover:bg-gray-200 rounded-lg transition-all duration-300">
        {count ? (
          <span className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-red-500 text-white flex items-center justify-center">
            <span className="text-xs">{count}</span>
          </span>
        ) : (
          <></>
        )}
        <span className="text-gray-600 text-xl">{icon}</span>
      </div>
    </Link>
  );
};
