import { CartCard, ImptyCard } from "../../ui";

export const CartCardsSection = ({ items }) => {
  return (
    <div className="space-y-5 flex flex-col justify-center items-center">
      {!items[0] ? (
        <div className="lg:w-1/2">
          <ImptyCard />
        </div>
      ) : (
        items?.map(({ id, name, price, specs, quantity, images }, index) => (
          <CartCard
            key={index}
            id={id}
            name={name}
            price={price}
            specs={specs}
            quantity={quantity}
            images={images}
          />
        ))
      )}
    </div>
  );
};
