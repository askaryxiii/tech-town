import React from "react";
import { Link } from "react-router-dom";

export const CategoryCard = ({ title, image }) => {
  return (
    <Link className="lg:w-[292px] md:w-[292px] h-[100px] group rounded-md overflow-hidden relative bg-gradient-to-br from-gray-100 to-gray-400 cursor-pointer transition-all duration-300">
      <img
        src={`${image?.url}`}
        alt=""
        loading="lazy"
        className="absolute -left-24 h-full w-5/6 object-cover transition-opacity duration-300 group-hover:opacity-0"
      />
      <div className="absolute right-0 top-0 h-full w-2/3 p-4 flex items-baseline-last justify-end opacity-100 transition-opacity duration-300 group-hover:opacity-0">
        <span className="text-white font-bold text-sm uppercase">
          {title} laptops
        </span>
      </div>
      <div className="absolute inset-0 h-full w-full p-4 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="text-white font-bold text-base uppercase">
          {title} laptops
        </span>
      </div>
    </Link>
  );
};
