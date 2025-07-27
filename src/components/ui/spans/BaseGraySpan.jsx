import { Link } from "react-router-dom";

export const BaseGraySpan = ({ weigth, text }) => {
  return weigth === "medium" ? (
    <Link>
      <span className="text-base font-medium text-gray-900">{text}</span>
    </Link>
  ) : (
    <span className="text-base font-bold text-gray-900">${text}</span>
  );
};
