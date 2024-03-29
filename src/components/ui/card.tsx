import { IProduct } from "@/utils/types/product.types";
import Image from "next/image";

const Card = ({ product }: { product: IProduct }) => {
  return (
    <div className="shadow-md border rounded">
      <div className="flex justify-center items-center p-2">
        <Image
          src={product?.image}
          alt={product.title}
          width={200}
          height={200}
          className="bg-contain h-40 w-fit"
        />
      </div>
      <div className="mt-5 p-2">
        <h4 className="line-clamp-2 font-medium">{product?.title}</h4>
        <p>${product?.price}</p>
      </div>
    </div>
  );
};

export default Card;
