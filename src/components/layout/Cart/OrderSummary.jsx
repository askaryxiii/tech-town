import { useSelector } from "react-redux";
import {
  BaseGraySpan,
  CardButton,
  DescriptionDetails,
  DescriptionList,
  DescriptionTerm,
  LinkArrow,
} from "../../ui";

export const OrderSummary = () => {
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const shipping = totalPrice === 0 ? 0 : 60;
  const taxes = totalPrice === 0 ? 0 : Math.round(totalPrice * 0.14);
  const total =
    totalPrice === 0 ? 0 : Math.round(totalPrice + shipping + taxes);

  return (
    <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm  sm:p-6">
      <p className="text-xl font-semibold text-gray-900 ">Order summary</p>

      <div className="space-y-4">
        <div className="space-y-2">
          <DescriptionList dt={"Price"} dd={totalPrice} />
          <DescriptionList dt={"Shipping"} dd={shipping} />
          <DescriptionList dt={"Tax"} dd={taxes} />
        </div>

        <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
          <DescriptionTerm text={"Total"} bold={true} />
          <DescriptionDetails text={total} bold={true} />
        </dl>
      </div>
      <CardButton text={"Proceed to Checkout"} />
      <div className="flex items-center justify-center gap-2">
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
          or
        </span>
        <BaseGraySpan weigth={"medium"} text={"Continue Shopping"} dist={"/"} />
        <LinkArrow />
      </div>
    </div>
  );
};
