import React, { useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { Product } from "../../types/Product";
import { fetchProducts } from "../../services/products";

export default function ProductGrid() {

    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProducts()
            .then((data) => setProducts(data))
            .catch((error) => console.error("Erro ao buscar produtos:", error))
            .finally(() => setLoading(false));
    }, []);

    const addProductToCart = (id: number) => {
        // Lógica para adicionar o produto ao carrinho
        console.log(`Produto ${id} adicionado ao carrinho`);
    }

    if(loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p className="text-gray-500">Carregando produtos...</p>
            </div>
        );
    }

    return (
        <div className="grid gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
                <div
                    key={product.id}
                    className="p-4 transition-shadow duration-200 bg-white border rounded shadow-sm hover:shadow-md"
                >
                    {/* Conteúdo clicável com Link para detalhes */}
                    <Link to={`/produto/${product.id}`} className="block mb-2 group hover:opacity-90">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="object-cover w-full h-40 mb-2 transition-transform rounded group-hover:scale-105"
                        />
                        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                    </Link>

                    {/* Preço */}
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

                    {/* Botão de ação */}
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
