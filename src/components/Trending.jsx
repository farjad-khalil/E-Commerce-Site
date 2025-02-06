import { useState } from "react";
import Product_card from "../components/product_card";
import Button from "../components/Button";
import { products } from "../Pages/Featured_products";

const TrendingProducts = () => {
const trendingProducts = products.slice(0,4)
  return (
    <div>
      <div className="text-4xl font-semibold lg:m-10 lg:ml-5 ml-0 m-10">
        Trending
      </div> 
      <div className="flex justify-center">
        <div className="custom-grid">
          {trendingProducts.map((product) => (
            <div
              key={product.index}
              
            >
              <Product_card
                index={product.index}
                title={product.title}
                price={product.price}
                rating={product.rating}
              />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default TrendingProducts;

