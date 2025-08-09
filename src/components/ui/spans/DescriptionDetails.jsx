import React from "react";

export const DescriptionDetails = ({ text, bold }) => {
  return (
    <dd
      className={`${
        bold ? "font-bold" : "font-medium"
      } text-base text-gray-900`}>
      E£ {text}
    </dd>
  );
};
