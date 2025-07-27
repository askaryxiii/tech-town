export const QuantityButtons = ({ src, func }) => {
  return (
    <button
      type="button"
      id="decrement-button"
      data-input-counter-decrement="counter-input"
      class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100">
      {src}
    </button>
  );
};
