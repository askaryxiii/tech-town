import { useParams } from "react-router";
import { useGetSingleProductQuery } from "../../features/products/api/apiSlice";
import {
  BaseGray600,
  CardButton,
  CompareIconButton,
  DescriptionTerm,
  FavIconButton,
  ImageLoadingSkeleton,
  PriceTag,
  QuantityButtons,
  ThreeXTitle,
} from "../../components/ui";
import { useState } from "react";
import { IoCart } from "react-icons/io5";
import { addToCart } from "../../features/cart/cartSlice";

const Product = () => {
  let { documentId } = useParams();
  const { isError, error, isSuccess, isLoading, data } =
    useGetSingleProductQuery(documentId);
  const [mainImage, setMainImage] = useState(null);
  const description = `${data?.data?.title} ${data?.data?.specs
    .map((s) => s.spec_value)
    .join(", ")}`;

  const changeImage = (src) => {
    setMainImage(src);
  };
  console.log(data?.data);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 px-4 mb-8">
          {isLoading ? (
            <ImageLoadingSkeleton />
          ) : (
            <img
              src={mainImage ? mainImage : data?.data?.images[0]?.url}
              alt="Product"
              className="w-full h-[500px] object-cover rounded-lg shadow-md mb-4"
            />
          )}

          <div className="flex gap-4 py-4 justify-center overflow-x-auto">
            {data?.data?.images.map((image) => (
              <img
                key={image?.id}
                src={image?.url}
                alt="Thumbnail"
                className="size-16 sm:size-20 object-cover rounded-md cursor-pointer transition duration-30"
                onClick={() => changeImage(image?.url)}
              />
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2 px-4 flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <ThreeXTitle title={data?.data?.title} />
            <BaseGray600 text={`SKU: ${data?.data?.documentId}`} />
          </div>
          <PriceTag price={data?.data?.price} bold={true} />
          <DescriptionTerm text={description} />

          <div className=" flex items-center">
            <QuantityButtons
              src={
                <svg
                  className="h-2.5 w-2.5 text-gray-900 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 2">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h16"
                  />
                </svg>
              }
              // func={() => dispatch(decreaseQuatity(id))}
            />
            <span className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0">
              0
            </span>
            <QuantityButtons
              src={
                <svg
                  className="h-2.5 w-2.5 text-gray-900 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              }
              // func={() => dispatch(increaseQuatity(id))}
            />
          </div>

          <div className="grid grid-cols-6 space-x-2 space-y-2.5 px-2.5">
            <CardButton
              text={"Add to Cart"}
              icon={<IoCart className="w-5 h-5" />}
              documentId={data?.data?.documentId}
              title={data?.data?.title}
              price={data?.data?.price}
              specs={data?.data?.specs}
              images={data?.data?.images}
              onClickFun={addToCart}
            />
            <CompareIconButton />
            <FavIconButton />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
            <ul className="list-disc list-inside text-gray-700">
              {data?.data?.specs.map(({ spec_name, spec_value, id }) => (
                <li key={id}>
                  {spec_name}: {spec_value}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <DescriptionTerm text={data?.data?.description} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
