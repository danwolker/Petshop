import React from "react";
import { Product } from "../../types/Product";

interface ProductGridProps {
    products: Product[];
    addProductToCart: (id: number) => void;
}

export default function ProductGrid({ products, addProductToCart }: ProductGridProps) {
    return (
        <div className="grid gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
                <div
                    key={product.id}
                    className="p-4 transition-shadow duration-200 bg-white border rounded shadow-sm hover:shadow-md"
                >
                    <img
                        src={product.image}
                        alt={product.name}
                        className="object-cover w-full h-40 mb-2 rounded"
                    />
                    <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>

                    <div className="mt-2 text-sm text-gray-600">
                        {product.discountPrice ? (
                            <>
                                <p className="text-red-500 line-through">R$ {product.price.toFixed(2)}</p>
                                <p className="font-bold text-green-600">R$ {product.discountPrice.toFixed(2)}</p>
                            </>
                        ) : (
                            <p className="font-bold text-gray-800">R$ {product.price.toFixed(2)}</p>
                        )}
                    </div>

                    <button
                        onClick={() => addProductToCart(product.id)}
                        className="w-full px-4 py-2 mt-4 text-white transition-colors bg-purple-600 rounded hover:bg-purple-700"
                    >
                        Adicionar ao carrinho
                    </button>
                </div>
            ))}
        </div>
    );
}
