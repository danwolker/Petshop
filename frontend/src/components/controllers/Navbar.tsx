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

  // Fecha o menu ao clicar em qualquer link
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-pink-100 shadow-md">
      <div className="flex items-center justify-between px-4 py-3 mx-auto max-w-7xl">
        {/* Botão menu e logo */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setMenuOpen(true)}
            className="text-xl text-gray-700 md:hidden"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>

          <Link to="/" className="flex items-center justify-center w-full md:w-auto">
            <img
              src="/images/logoprincipal.png"
              alt="Das Gurias"
              className="h-10 mx-auto md:mx-0"
            />
          </Link>
        </div>

        {/* Campo de busca (desktop apenas) */}
        <div className="justify-center flex-1 hidden sm:flex">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Procurar produtos, categorias..."
              className="w-full px-5 py-2 text-sm border border-gray-300 rounded-full focus:outline-none"
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute right-4 top-2.5 text-gray-500 text-sm"
            />
          </div>
        </div>

        {/* Ícones sociais e carrinho */}
        <div className="flex items-center gap-4">
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
        </div>
      </div>

      {/* Backdrop do menu (fecha ao clicar fora) */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-30 md:hidden"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Menu Mobile com animação */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-pink-100 shadow-md z-50 transform transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4">
          <nav className="flex flex-col gap-3 text-sm font-medium text-gray-800">
            <hr className="my-2 border-gray-300" />
            <Link to="/todos" onClick={handleLinkClick} className="hover:text-purple-700">Todos</Link>
            <Link to="/promocoes" onClick={handleLinkClick} className="font-semibold text-orange-600">Promoções</Link>
            <Link to="/caes" onClick={handleLinkClick} className="hover:text-purple-700">Cachorros</Link>
            <Link to="/gatos" onClick={handleLinkClick} className="hover:text-purple-700">Gatos</Link>
            <Link to="/passaros" onClick={handleLinkClick} className="hover:text-purple-700">Outros Pets</Link>
            <Link to="/casa" onClick={handleLinkClick} className="hover:text-purple-700">Casa</Link>
            <Link to="/jardim" onClick={handleLinkClick} className="hover:text-purple-700">Jardim</Link>
          </nav>
        </div>
      </aside>
    </header>
  );
}
