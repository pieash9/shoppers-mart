import Card from "@/components/ui/card";
import { getAllProducts } from "@/utils/api/product";
import { IProduct } from "@/utils/types/product.types";

const HomePage = async () => {
  const products: IProduct[] = await getAllProducts();
  return (
    <main className="container mx-auto">
      <div className=""></div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-5 mt-10">
        {products &&
          products.length &&
          products.map((product: IProduct) => (
            <Card key={product.id} product={product} />
          ))}
      </div>
    </main>
  );
};

export default HomePage;
