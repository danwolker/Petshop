// src/components/products/Product.tsx
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ProductProps {
  id: number;
  name: string;
  image: string;
  price: number;
  addProductToCart: (id: number) => void;
}

export default function Product({ id, name, image, price, addProductToCart }: ProductProps) {
  return (
    <div className="flex flex-col items-center p-4 bg-white border rounded-lg shadow hover:shadow-md">
      <img src={image} alt={name} className="object-cover w-32 h-32 mb-3" />
      <p className="font-semibold text-center">{name}</p>
      <p className="text-sm font-bold text-purple-700">R$ {price.toFixed(2)}</p>

      <button
        onClick={() => addProductToCart(id)}
        className="flex items-center justify-center w-full gap-2 py-1 mt-3 text-white bg-purple-700 rounded hover:bg-purple-800"
      >
        <span>Adicionar ao carrinho</span>
        <FontAwesomeIcon icon={faCartShopping} />
      </button>
    </div>
  );
}
