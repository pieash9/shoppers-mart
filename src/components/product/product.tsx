"use client";

import { motion } from "framer-motion";
import { IProduct } from "@/utils/types/product.types";
import Card from "../ui/card";

const Product = ({ products }: { products: IProduct[] }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 mt-10">
      {products &&
        products.length &&
        products.map((product: IProduct, i: number) => (
          <motion.div
            key={product.id}
            initial={{
              opacity: 0,
              translateX: 25,
            }}
            animate={{ opacity: 1, translateX: 0, translateY: 0 }}
            transition={{ duration: 0.2, delay: i * 0.2 }}
          >
            <Card product={product} />
          </motion.div>
        ))}
    </div>
  );
};

export default Product;
