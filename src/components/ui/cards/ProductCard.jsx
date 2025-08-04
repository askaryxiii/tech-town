import { Link } from "react-router-dom";
import {
  PriceTag,
  CompareIconButton,
  FavIconButton,
  AddToCart,
  ProductCardCarousel,
  ProductTitle,
} from "../index";

export const ProductCard = ({ name, price, images, documentId, specs }) => {
  return (
    <div className="bg-white max-w-75 md:h-fit lg:h-fit rounded-2xl space-y-2 shadow-sm pb-4 pt-1.5 px-1.5">
      {/* Image Section */}
      <Link to={`/product/${documentId}`} className="flex flex-col gap-2.5">
        <ProductCardCarousel imgs={images} />
        <div className="flex flex-col gap-0.5 px-3.5">
          <ProductTitle title={name} />
          <span className="">
            <PriceTag price={price} />
          </span>
        </div>
      </Link>
      <div className="grid grid-cols-7 space-x-2 space-y-2.5 px-2.5">
        <CompareIconButton />
        <FavIconButton />
        <AddToCart
          documentId={documentId}
          title={name}
          price={price}
          specs={specs}
        />
      </div>
    </div>
  );
};
