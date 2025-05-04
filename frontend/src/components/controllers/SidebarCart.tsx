import React from "react";
import { faMoneyBill, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SidebarProduct from "../controllers/SidebarProduct";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface SidebarCartProps {
  setShowSidebarCart: React.Dispatch<React.SetStateAction<boolean>>;
  showSidebarCart: boolean;
  selectedProducts: Product[];
  cartTotal: number;
  removeProductFromCart: (id: number) => void;
}

export default function SidebarCart({
  setShowSidebarCart,
  showSidebarCart,
  selectedProducts,
  cartTotal,
  removeProductFromCart,
}: SidebarCartProps) {
  return (
    <aside
      className={`fixed top-0 right-0 h-screen w-72 md:w-80 bg-white shadow-lg z-[9999] transform transition-transform duration-300 ease-in-out
        ${showSidebarCart ? "translate-x-0" : "translate-x-full"}`}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Topo do carrinho */}
      <div className="flex items-center justify-between p-4 border-b">
        <h3 className="text-lg font-semibold text-gray-800">Seu carrinho</h3>
        <button onClick={() => setShowSidebarCart(false)} className="text-xl text-gray-600 hover:text-red-500">
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>

      {/* Lista de produtos */}
      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        {selectedProducts.length > 0 ? (
          selectedProducts.map((product) => (
            <SidebarProduct
              key={product.id}
              {...product}
              removeProductFromCart={removeProductFromCart}
            />
          ))
        ) : (
          <p className="text-sm text-gray-600">Seu carrinho está vazio.</p>
        )}
      </div>

      {/* Total e botão de checkout */}
      <div className="p-4 border-t">
        <div className="mb-3 text-right">
          <span className="text-sm font-medium text-gray-700">Total: </span>
          <span className="text-lg font-bold text-green-700">
            R$ {cartTotal !== undefined ? cartTotal.toFixed(2) : "0.00"}
          </span>
        </div>
        <Link
          to="/cart/checkout"
          className="flex items-center justify-center gap-2 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700"
        >
          <span>Ver agora</span>
          <FontAwesomeIcon icon={faMoneyBill} />
        </Link>
      </div>
    </aside>
  );
}
