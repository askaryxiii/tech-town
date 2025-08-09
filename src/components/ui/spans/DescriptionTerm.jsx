export const DescriptionTerm = ({ text, bold }) => {
  return (
    <dt
      className={`${
        bold ? "font-bold text-gray-900" : "font-normal text-gray-500"
      } text-base`}>
      {text}
    </dt>
  );
};
