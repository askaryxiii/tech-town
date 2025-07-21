import { Link } from "react-router-dom";
import {
  PriceTag,
  CompareIconButton,
  FavIconButton,
  AddToCart,
  ProductCardCarousel,
  ProductTitle,
} from "../index";

export const ProductCard = ({ name, price, images, documentId }) => {
  return (
    <div className="bg-white max-w-75 min-h-80 max-h-100 rounded-2xl shadow-sm flex flex-col p-4 gap-2 group cursor-pointer">
      <Link to={`/product/${documentId}`} className="flex flex-col gap-2.5">
        <ProductCardCarousel imgs={images} />
        <ProductTitle title={name} />
      </Link>
      <div className="relative h-8 ">
        <span className="transition-all duration-500 transform translate-y-0 opacity-100 group-hover:-translate-y-4 group-hover:opacity-0 absolute inset-0 ">
          <PriceTag price={price} />
        </span>
        <div className="absolute inset-0 transition-all duration-500 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 text-base font-medium ">
          <div className="flex justify-between">
            <AddToCart />
            <div className="flex gap-3">
              <FavIconButton />
              <CompareIconButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
