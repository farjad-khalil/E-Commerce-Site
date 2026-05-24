import Product_card from "../components/Product_card";
import { products } from "../data/products";

const TrendingProducts = () => {
const trendingProducts = products.slice(0,4)
  return (
    <section className='space-y-6'>
      <div>
        <p className='text-sm uppercase tracking-[0.35em] text-cyan-200/70'>Trending</p>
        <h2 className='mt-2 text-3xl font-semibold text-white md:text-4xl'>Best-selling selections</h2>
      </div>
      <div className="flex justify-center">
        <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
          {trendingProducts.map((product) => (
            <div
              key={product.id}
              
            >
              <Product_card product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;

