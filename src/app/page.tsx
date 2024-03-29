import Card from "@/components/ui/card";
import { getAllProducts } from "@/utils/api/product";
import { IProduct } from "@/utils/types/product.types";

const HomePage = async () => {
  const products: IProduct[] = await getAllProducts();
  const isLoading = products === undefined;

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <main className="container mx-auto">
      <div className=""></div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 mt-10">
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
