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
    <div className="flex flex-col items-center p-4 bg-white border rounded-lg shadow hover:shadow-md">
      <Link to={`/produto/${id}`} className="flex flex-col items-center w-full mb-3 hover:opacity-90">
        <img src={image} alt={name} className="object-cover w-32 h-32 mb-2" />
        <p className="font-semibold text-center">{name}</p>
        <p className="text-sm font-bold text-purple-700">R$ {price.toFixed(2)}</p>
      </Link>

      <div className="flex flex-col w-full gap-2">
        <button
          onClick={() => addProductToCart(id)}
          className="flex items-center justify-center gap-2 py-1 text-white bg-purple-700 rounded hover:bg-purple-800"
        >
          <span>Adicionar ao carrinho</span>
          <FontAwesomeIcon icon={faCartShopping} />
        </button>
        <Link
          to={`/produto/${id}`}
          className="flex items-center justify-center gap-2 py-1 text-white bg-green-600 rounded hover:bg-green-700"
        >
          <span>Comprar Agora</span>
          <FontAwesomeIcon icon={faMoneyBill} />
        </Link>
      </div>
    </div>
  );
}
