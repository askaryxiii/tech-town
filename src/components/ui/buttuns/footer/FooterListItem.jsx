import React from "react";
import { Link } from "react-router-dom";

export const FooterListItem = ({ title, dist }) => {
  return (
    <Link to={dist} className="hover:underline me-4 md:me-6 ">
      {title}
    </Link>
  );
};
