import { useDispatch } from "react-redux";

export const CardButton = ({
  documentId,
  title,
  price,
  specs,
  images,
  onClickFun,
  icon,
  text,
}) => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => {
        documentId && title && price && specs && images
          ? dispatch(
              onClickFun({
                id: documentId,
                name: title,
                price: price,
                specs: specs,
                images: images,
              })
            )
          : onClickFun;
      }}
      className={`${
        documentId && title && price && specs && images
          ? "h-11 uppercase cursor-pointer text-white text-sm font-semibold rounded-xl flex justify-center items-center gap-3 col-span-7"
          : "flex w-full items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium text-white  focus:outline-none focus:ring-0"
      } bg-[#2c2c2c]`}>
      {icon}
      {text}
    </button>
  );
};
