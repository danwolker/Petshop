import ProductsList from "../components/products/ProductsList";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  rating?: number;
}

interface ProductsPageProps {
  products: Product[];
  addProductToCart: (id: number) => void;
}

export default function ProductsPage({ products, addProductToCart }: ProductsPageProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h3 className="text-2xl font-bold text-center mb-6">Nossos Produtos!</h3>
      <div className="border-t pt-6">
        <ProductsList products={products} addProductToCart={addProductToCart} />
      </div>
    </div>
  );
}
