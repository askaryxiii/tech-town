import { BaseGraySpan, CartCardImage, QuantityButtons } from "../index";
export const CartCard = () => {
  return (
    <div class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm  md:p-6">
      <div class="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
        <CartCardImage
          src={
            "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
          }
        />
        <div class="flex items-center justify-between md:order-3 md:justify-end">
          <div class="flex items-center">
            <QuantityButtons
              src={
                <svg
                  class="h-2.5 w-2.5 text-gray-900 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 2">
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h16"
                  />
                </svg>
              }
            />
            <input
              type="text"
              id="counter-input"
              data-input-counter
              class="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 "
              placeholder=""
              value="2"
              required
            />
            <QuantityButtons
              src={
                <svg
                  class="h-2.5 w-2.5 text-gray-900 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18">
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              }
            />
          </div>
          <div class="text-end md:order-4 md:w-32">
            <BaseGraySpan weigth={"bold"} text={"1,499"} />
          </div>
        </div>

        <div class="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
          <BaseGraySpan
            weigth={"medium"}
            text={` PC system All in One APPLE iMac (2023) mqrq3ro/a, Apple M3, 24"
            Retina 4.5K, 8GB, SSD 256GB, 10-core GPU, Keyboard layout INT`}
          />
          <div class="flex items-center gap-4">
            <button
              type="button"
              class="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white">
              <svg
                class="me-1.5 h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                />
              </svg>
              Add to Favorites
            </button>

            <button
              type="button"
              class="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500">
              <svg
                class="me-1.5 h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18 17.94 6M18 18 6.06 6"
                />
              </svg>
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
