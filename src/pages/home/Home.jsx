import { CategoryCard, HeroCarousel, ProductCard } from "../../components/ui";
import { useGetCategoriesQuery } from "../../features/categories/api/apiSlice";
import { useGetProductsQuery } from "../../features/products/api/apiSlice";

const Home = () => {
  const { data: products } = useGetProductsQuery();
  const { data: categories } = useGetCategoriesQuery();

  return (
    //main page section
    <section className="py-5 lg:px-10 p-5 flex flex-col gap-5 min-h-fit">
      <HeroCarousel />
      {/* category Section */}
      <section className="w-full grid lg:grid-cols-4 md:grid-cols-2 space-y-4 grid-cols-1 ">
        {categories?.data.map(({ documentId, title, image }) => (
          <CategoryCard key={documentId} title={title} image={image} />
        ))}
      </section>
      {/* product section */}
      <section className="grid grid-cols-1 space-y-5 md:grid-cols-2 lg:grid-cols-4">
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
      </section>
    </section>
  );
};

export default Home;

{
  /* <div className="grid grid-cols-5">
        {products?.data.map((product, index) => (
          <ProductCard
            key={index}
            images={product.images}
            name={product.title}
            price={product.price}
          />
        ))}
      </div> */
}
