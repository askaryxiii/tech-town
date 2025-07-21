import { HeroCarousel, ProductCard } from "../../components/ui";
import { useGetProductsQuery } from "../../features/products/api/apiSlice";

const Home = () => {
  const { isError, error, isSuccess, isLoading, data } = useGetProductsQuery();
  return (
    <section className="py-5 lg:px-10 p-5">
      <HeroCarousel />
      {/* <div className="grid grid-cols-5">
        {data?.data.map((product, index) => (
          <ProductCard key={index} images={product.images} />
        ))}
      </div> */}
    </section>
  );
};

export default Home;
