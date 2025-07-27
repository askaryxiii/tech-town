import { Link } from "react-router-dom";

export const CartCardImage = ({ src }) => {
  return (
    <Link className="shrink-0 md:order-1">
      <img class="h-20 w-20" src={src} alt="imac image" />
    </Link>
  );
};
