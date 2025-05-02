import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

interface NavbarProps {
  setShowSidebarCart: React.Dispatch<React.SetStateAction<boolean>>;
  selectedProducts: any[];
}

export default function Navbar({ setShowSidebarCart, selectedProducts }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-pink-100 shadow-md">
      <div className="flex flex-wrap items-center justify-between px-4 py-3 mx-auto max-w-7xl">
        <Link to="/" className="flex items-center gap-3">
          <img src="/images/logoprincipal.png" alt="Das Gurias" className="w-auto h-10" />
        </Link>

        {/* Busca maior */}
        <div className="relative flex-1 hidden mx-6 sm:flex">
          <input
            type="text"
            placeholder="Procurar produtos, categorias..."
            className="w-full px-5 py-2 text-sm border border-gray-300 rounded-full focus:outline-none"
          />
          <FontAwesomeIcon icon={faSearch} className="absolute right-4 top-2.5 text-gray-500 text-sm" />
        </div>

        <div className="flex items-center gap-4 mt-2 sm:mt-0">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="text-xl text-purple-700 hover:text-purple-900" />
          </a>
          <a href="https://wa.me/seunumero" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} className="text-xl text-green-600 hover:text-green-700" />
          </a>

          <button
            onClick={() => setShowSidebarCart(true)}
            className="relative text-gray-700 hover:text-violet-800"
          >
            <FontAwesomeIcon icon={faShoppingCart} className="text-xl" />
            {selectedProducts.length > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5">
                {selectedProducts.length}
              </span>
            )}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-xl text-gray-700 md:hidden"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="px-4 pb-4 bg-pink-100 md:hidden">
          <nav className="flex flex-col gap-3 text-sm font-medium text-gray-800">
            <Link to="/">Início</Link>
            <Link to="/caes">Para seu Cão</Link>
            <Link to="/gatos">Para seu Gato</Link>
            <Link to="/pets">Para Todos Pets</Link>
            <Link to="/farmacia">Farmácia</Link>
            <Link to="/promocoes">Promoções</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
