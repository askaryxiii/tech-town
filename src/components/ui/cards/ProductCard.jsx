import { Link } from "react-router-dom";
import {
  PriceTag,
  CompareIconButton,
  FavIconButton,
  CardButton,
  ProductCardCarousel,
  ProductTitle,
} from "../index";
import { IoCart } from "react-icons/io5";
import { addToCart } from "../../../features/cart/cartSlice";

export const ProductCard = ({ name, price, images, documentId, specs }) => {
  const wantedSpecs = [
    "Processor",
    "Memory",
    "Hard Disk",
    "Graphic Card",
    "Display Size",
  ];
  const line = `${name} ${specs
    .filter((s) => wantedSpecs.includes(s.spec_name))
    .map((s) => s.spec_value)
    .join(" ")}`;
  return (
    <div className="bg-white max-w-75 md:h-fit lg:h-fit rounded-2xl space-y-2 shadow-sm pb-4 pt-1.5 px-1.5">
      {/* Image Section */}
      <Link to={`/product/${documentId}`} className="flex flex-col gap-2.5">
        <ProductCardCarousel imgs={images} />
        <div className="flex flex-col gap-0.5 px-3.5">
          <ProductTitle title={line} />
          <span className="">
            <PriceTag price={price} />
          </span>
        </div>
      </Link>
      <div className="grid grid-cols-7 space-x-2 space-y-2.5 px-2.5">
        <CompareIconButton />
        <FavIconButton />
        <CardButton
          text={"Add to Cart"}
          icon={<IoCart className="w-5 h-5" />}
          documentId={documentId}
          title={name}
          price={price}
          specs={specs}
          images={images}
          onClickFun={addToCart}
        />
      </div>
    </div>
  );
};
