import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

interface SidebarProductProps {
  id: number;
  name: string;
  image: string;
  price: number;
  removeProductFromCart: (id: number) => void;
}

export default function SidebarProduct({
  id,
  name,
  image,
  price,
  removeProductFromCart,
}: SidebarProductProps) {
  const [quantity, setQuantity] = useState(1);
  const [priceSum, setPriceSum] = useState(price);

  return (
    <div className="flex items-start justify-between border rounded-md p-3 bg-gray-50">
      {/* Lado esquerdo - informações */}
      <div className="flex gap-3 w-full">
        <div className="flex flex-col items-start flex-1">
          <div className="flex justify-between items-center w-full">
            <h4 className="text-sm font-semibold text-gray-800">{name}</h4>
            <button
              onClick={() => removeProductFromCart(id)}
              className="text-gray-500 hover:text-red-500 text-lg"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
          <p className="text-sm text-gray-600">R$ {price.toFixed(2)}</p>

          <input
            type="number"
            min={1}
            max={100}
            value={quantity}
            onChange={(e) => {
              const newQuantity = Number(e.target.value);
              setQuantity(newQuantity);
              setPriceSum(newQuantity * price);
            }}
            className="mt-1 w-20 border rounded-md px-2 py-1 text-sm text-gray-800 focus:outline-none"
          />

          {priceSum > price && (
            <p className="text-xs mt-1 text-green-700 font-medium">
              <b>Soma: </b>R$ {priceSum.toFixed(2)}
            </p>
          )}
        </div>
      </div>

      {/* Lado direito - imagem */}
      <div className="ml-2 flex-shrink-0">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 object-cover rounded border"
        />
      </div>
    </div>
  );
}
