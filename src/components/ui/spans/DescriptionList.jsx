import React from "react";
import { DescriptionTerm } from "./DescriptionTerm";
import { DescriptionDetails } from "./DescriptionDetails";

export const DescriptionList = ({ dt, dd }) => {
  return (
    <dl className="flex items-center justify-between gap-4">
      <DescriptionTerm text={dt} />
      <DescriptionDetails text={dd} />
    </dl>
  );
};
