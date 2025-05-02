import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-gray-100 py-12 px-6 text-center md:text-left flex flex-col md:flex-row items-center justify-between">
      <div className="space-y-3 max-w-xl">
        <h2 className="text-3xl font-bold text-purple-800">Área designada a anúncios e promoções</h2>
        <p className="text-gray-600">Explicação do produto do anúncio.</p>
        <Link to="/produtos" className="inline-flex items-center gap-2 bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800 text-sm">
          Ver agora! <FontAwesomeIcon icon={faChevronRight} />
        </Link>
      </div>
      <div className="mt-6 md:mt-0">
        <img src="/images/logoprincipal.png" alt="Das Gurias" className="h-28" />
      </div>
    </header>
  );
}