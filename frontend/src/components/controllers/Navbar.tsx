import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faBars, faSearch } from "@fortawesome/free-solid-svg-icons";

interface NavbarProps {
  setShowSidebarCart: React.Dispatch<React.SetStateAction<boolean>>;
  selectedProducts: any[];
}

export default function Navbar({ setShowSidebarCart, selectedProducts }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-pink-100 shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/images/logoprincipal.png"
            alt="Das Gurias"
            className="h-10 w-auto"
          />
        </Link>

        {/* Menu desktop */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-800">
          <Link to="/">Início</Link>
          <Link to="/caes">Para seu Cão</Link>
          <Link to="/gatos">Para seu Gato</Link>
          <Link to="/pets">Para Todos Pets</Link>
          <Link to="/farmacia">Fármacia</Link>
          <Link to="/promocoes">Promoções</Link>
        </nav>

        {/* Ações (busca, carrinho, menu mobile) */}
        <div className="flex items-center gap-4">
          {/* Campo de busca - visível a partir do sm */}
          <div className="relative hidden sm:flex items-center">
            <input
              type="text"
              placeholder="Procurar"
              className="border border-gray-300 rounded-full px-4 py-1 text-sm focus:outline-none"
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute right-3 text-gray-500 text-sm"
            />
          </div>

          {/* Carrinho */}
          <button
            onClick={() => setShowSidebarCart(true)}
            className="relative text-gray-700 hover:text-gray-900"
          >
            <FontAwesomeIcon icon={faShoppingCart} className="text-xl" />
            {selectedProducts.length > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5">
                {selectedProducts.length}
              </span>
            )}
          </button>

          {/* Botão menu mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-xl text-gray-700"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 bg-pink-100">
          <nav className="flex flex-col gap-3 text-sm font-medium text-gray-800">
            <Link to="/" onClick={() => setMenuOpen(false)}>Início</Link>
            <Link to="/caes" onClick={() => setMenuOpen(false)}>Para seu Cão</Link>
            <Link to="/gatos" onClick={() => setMenuOpen(false)}>Para seu Gato</Link>
            <Link to="/pets" onClick={() => setMenuOpen(false)}>Para Todos Pets</Link>
            <Link to="/farmacia" onClick={() => setMenuOpen(false)}>Fármacia</Link>
            <Link to="/promocoes" onClick={() => setMenuOpen(false)}>Promoções</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
