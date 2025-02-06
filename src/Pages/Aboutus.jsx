import React from "react";

const AboutUs = () => {
  return (
    <div className="flex flex-col space-y-7 mt-10">
      <div className="text-4xl font-semibold  ">About Us</div>

      <div>
        At <span className="font-semibold">SwiftCart</span>, we are passionate about bringing you the best products with
        quality, affordability, and innovation in mind. Our mission is to provide a seamless online shopping experience, 
        offering a curated selection of electronics, accessories, and lifestyle products that enhance your everyday life.
      </div>

      <ul className="list-disc ml-10">
        <li>✅ <span className="font-semibold">Quality Assurance</span> – Every product is carefully selected and tested for durability.</li>
        <li>✅ <span className="font-semibold">Customer Satisfaction</span> – We prioritize your needs with hassle-free returns and reliable support.</li>
        <li>✅ <span className="font-semibold">Fast & Secure Delivery</span> – Ensuring your orders reach you quickly and safely.</li>
      </ul>

      <div>
        Whether you're looking for a reliable shopping experience or the best deals, <span className="font-semibold">SwiftCart</span> is committed to delivering high-quality products and exceptional service.  
        Enjoy a seamless and hassle-free shopping experience with us! 🚀
      </div>
    </div>
  );
};

export default AboutUs;
