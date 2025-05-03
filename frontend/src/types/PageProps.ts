import { Product } from "./Product";

export interface PageProps {
  products: Product[];
  addProductToCart: (id: number) => void;
}
