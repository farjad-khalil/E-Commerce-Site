import { useState } from "react";
import Product_card from "../components/product_card";
import Button from "../components/Button";

const FeaturedProducts = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div>
      <div className="text-4xl font-semibold lg:m-10 lg:ml-5 ml-0 m-10">
        Featured Products
      </div>

      <div className="flex justify-center">
        <div className="custom-grid">
          {products.map((product, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ease-in-out ${
                index >= 8 && !showAll
                  ? "max-h-0 opacity-0 scale-90 overflow-hidden"
                  : "max-h-[500px] opacity-100 scale-100"
              }`}
            >
              <Product_card
                title={product.title}
                price={product.price}
                rating={product.rating}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <Button
          onClick={() => setShowAll(!showAll)}
          E_classes="w-32 h-10 transition-all duration-300"
          text={showAll ? "Show Less" : "Show More"}
        />
      </div>
    </div>
  );
};

export default FeaturedProducts;

const products = [
  { title: "Wireless Bluetooth Headphones", price: "$49.99", rating: "4.5" },
  { title: "Smartwatch Pro Series", price: "$89.99", rating: "4.7" },
  { title: "Gaming Mouse RGB", price: "$29.99", rating: "4.3" },
  { title: "Mechanical Keyboard", price: "$79.99", rating: "4.6" },
  { title: "Ultra HD 4K Monitor", price: "$299.99", rating: "4.8" },
  { title: "Portable Power Bank", price: "$39.99", rating: "4.4" },
  { title: "Noise Cancelling Earbuds", price: "$59.99", rating: "4.7" },
  { title: "Wireless Charging Pad", price: "$19.99", rating: "4.2" },
  { title: "Smart Home Speaker", price: "$99.99", rating: "4.6" },
  { title: "Laptop Cooling Pad", price: "$34.99", rating: "4.3" },
  { title: "USB-C Hub Adapter", price: "$24.99", rating: "4.5" },
  { title: "Adjustable Phone Stand", price: "$15.99", rating: "4.1" },
  { title: "LED Desk Lamp with USB", price: "$27.99", rating: "4.6" },
  { title: "Ergonomic Office Chair", price: "$189.99", rating: "4.8" },
  { title: "Foldable Laptop Stand", price: "$22.99", rating: "4.3" }
];

