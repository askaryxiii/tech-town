import { useSelector } from "react-redux";
import {
  CartCardsSection,
  OrderSummary,
  ThreeXTitle,
} from "../../components/ui";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  return (
    <section className="py-8 antialiased md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <ThreeXTitle title={"Shopping Cart"} />
        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
          <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
            <CartCardsSection items={items} />
          </div>

          <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full shadow-lg">
            <OrderSummary />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
