// src/components/products/ProductCard.tsx
import React from "react";
import { Link } from "react-router-dom";

interface Product {
    id: number;
    name: string;
    price: number;
    discountPrice?: number;
    image: string;
}

interface Props {
    product: Product;
    addToCart: (id: number) => void;
}

export default function ProductCard({ product, addToCart }: Props) {
    return (
        <div className="p-4 transition bg-white rounded shadow hover:shadow-md">
            {/* Card clicável */}
            <Link
                to={`/produto/${product.id}`}
                className="block cursor-pointer group"
            >
                <img
                    src={product.image}
                    alt={product.name}
                    className="object-contain w-full h-48 mb-2 transition-transform group-hover:scale-105"
                />
                <h3 className="mb-1 text-sm font-semibold">{product.name}</h3>
            </Link>

            {/* Preço */}
            <div className="mb-2 text-sm">
                {product.discountPrice ? (
                    <>
                        <span className="font-bold text-red-600">
                            R$ {product.discountPrice.toFixed(2)}
                        </span>{" "}
                        <span className="ml-1 text-gray-400 line-through">
                            R$ {product.price.toFixed(2)}
                        </span>
                    </>
                ) : (
                    <span className="font-bold">R$ {product.price.toFixed(2)}</span>
                )}
            </div>

            {/* Botão de adicionar ao carrinho */}
            <button
                className="w-full py-1 mt-2 text-sm text-white bg-purple-600 rounded hover:bg-purple-700"
                onClick={() => addToCart(product.id)}
            >
                + Adicionar ao Carrinho
            </button>
        </div>
    );
}
