import emptyCart from "../../../assets/cart/emptyCart.png";
export const ImptyCard = () => {
  return (
    <img
      src={emptyCart}
      loading="lazy"
      alt=""
      className="h-full object-cover"
    />
  );
};
