import { IProduct } from "@/utils/types/product.types";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Card = ({ product }: { product: IProduct }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="shadow-md border rounded"
    >
      <div className="h-[20rem]">
        <Link href={`/product-details/${product?.id}`}>
          <div className="flex justify-center items-center p-2">
            <Image
              src={product?.image}
              alt={product.title}
              width={200}
              height={200}
              className="bg-contain h-40 w-fit"
            />
          </div>
          <div className="mt-5 p-2 space-y-2">
            <h4 className="line-clamp-2 font-medium">{product?.title}</h4>
            <div className="flex gap-1 items-center text-sm">
              <FaStar className="text-yellow-400" />
              <span>
                {product?.rating?.rate}/5{" "}
                <span>({product?.rating?.count})</span>
              </span>
            </div>
            <p className="text-orange-500 font-semibold">$ {product?.price}</p>
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default Card;
