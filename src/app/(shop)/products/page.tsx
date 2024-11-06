import { ProductGrid } from "@/components";
import { initialData } from "@/seed/seed";

const products = initialData.products;

export default function Products() {
  return (
    <div className="mt-16">
      <ProductGrid products={products} />
    </div>
  );
}
