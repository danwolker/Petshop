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
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out 
        ${showSidebarCart ? "translate-x-0" : "translate-x-full"}`}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Topo do carrinho */}
      <div className="flex items-center justify-between p-4 border-b">
        <h3 className="text-lg font-semibold text-gray-800">Seu carrinho</h3>
        <button onClick={() => setShowSidebarCart(false)} className="text-gray-600 hover:text-red-500 text-xl">
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>

      {/* Lista de produtos */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
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
        <div className="text-right mb-3">
          <span className="text-sm font-medium text-gray-700">Total: </span>
          <span className="text-lg font-bold text-green-700">
            R$ {cartTotal !== undefined ? cartTotal.toFixed(2) : "0.00"}
          </span>
        </div>
        <Link
          to="/cart/checkout"
          className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-2 rounded-md text-sm font-medium"
        >
          <span>Ver agora</span>
          <FontAwesomeIcon icon={faMoneyBill} />
        </Link>
      </div>
    </aside>
  );
}
