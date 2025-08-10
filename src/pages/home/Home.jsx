import { CategoryCard, HeroCarousel, ProductCard } from "../../components/ui";
import { useGetCategoriesQuery } from "../../features/categories/api/apiSlice";
import { useGetProductsQuery } from "../../features/products/api/apiSlice";
import homeImage from "../../assets/home/home.webp";

const Home = () => {
  const { data: products } = useGetProductsQuery();
  const { data: categories } = useGetCategoriesQuery();

  return (
    <div className=" flex flex-col">
      <section className="lg:px-10 p-5 py-5 flex flex-col gap-5 min-h-fit items-center">
        <HeroCarousel />
        {/* category Section */}
        <section className="w-full grid lg:grid-cols-3 md:grid-cols-2 space-y-4 grid-cols-1 lg:justify-items-center">
          {categories?.data.map(({ documentId, title, image }) => (
            <CategoryCard key={documentId} title={title} image={image} />
          ))}
        </section>
      </section>
      {/* product section */}
      <section className="grid lg:grid-cols-8 lg:grid-rows-10 justify-items-center px-4 lg:gap-2.5 sm:px-6 lg:px-0 py-5 ">
        <div className="hidden lg:block row-start-1 row-end-11 col-start-1 col-end-2">
          <img
            src={homeImage}
            alt=""
            className="h-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="hidden lg:block row-start-1 row-end-11 col-start-8 col-end-9">
          <img
            src={homeImage}
            alt=""
            className="h-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="row-start-1 row-end-11 col-start-1 lg:col-start-2 col-end-9 lg:col-end-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <span className="lg:col-span-3 md:col-span-2 text-4xl font-medium text-gray-700">
            Featured Products
          </span>
          {products?.data.map(({ title, price, images, documentId, specs }) => (
            <ProductCard
              key={documentId}
              images={images}
              name={title}
              price={price}
              specs={specs}
              documentId={documentId}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
