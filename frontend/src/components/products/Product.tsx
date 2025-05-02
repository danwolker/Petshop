import { faCartShopping, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

interface ProductProps {
  id: number;
  name: string;
  image: string;
  price: number;
  addProductToCart: (id: number) => void;
}

export default function Product({ id, name, image, price, addProductToCart }: ProductProps) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-md bg-white flex flex-col items-center">
      <img src={image} alt={name} className="w-32 h-32 object-cover mb-3" />
      <p className="text-center font-semibold">{name}</p>
      <p className="text-purple-700 font-bold text-sm">R$ {price.toFixed(2)}</p>

      <div className="flex flex-col gap-2 mt-3 w-full">
        <Link
          to={`/products/${id}/checkout`}
          className="flex items-center justify-center gap-2 bg-green-600 text-white py-1 rounded hover:bg-green-700"
        >
          <span>Comprar Agora</span>
          <FontAwesomeIcon icon={faMoneyBill} />
        </Link>
        <button
          onClick={() => addProductToCart(id)}
          className="flex items-center justify-center gap-2 bg-purple-700 text-white py-1 rounded hover:bg-purple-800"
        >
          <span>Adicionar ao carrinho</span>
          <FontAwesomeIcon icon={faCartShopping} />
        </button>
      </div>
    </div>
  );
}
