export const PriceTag = ({ price, bold }) => {
  return (
    <span
      className={` ${
        bold ? "text-2xl font-bold" : "text-base font-medium text-gray-600"
      } `}>
      E£ {price}
    </span>
  );
};
