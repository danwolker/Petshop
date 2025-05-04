// src/pages/ProductDetailPage.tsx
import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ProductDetailPage() {
    const { id } = useParams();

    // MOCK TEMPORÁRIO - depois será substituído por dados do backend
    const product = {
        id: Number(id),
        name: "Ração Golden Special para Cães Adultos Frango e Carne 15 kg",
        brand: "Golden",
        description: [
            "Indicada para cães adultos",
            "Blend de proteínas",
            "Músculos mais fortes",
            "Redução do odor das fezes",
            "Mais rendimento por quilo",
            "Saúde e vitalidade",
            "Livre de aromatizantes e corantes artificiais"
        ],
        price: 149.90,
        pricePromo: 134.91,
        image: "/images/produtos/racao-golden-15kg.png",
        rating: 4.8,
        reviews: 8249
    };

    return (
        <div className="max-w-6xl px-4 py-8 mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-4 text-sm text-gray-600">
                <Link to="/" className="hover:underline">Página inicial</Link> &gt;{" "}
                <Link to="/caes" className="hover:underline">Cachorro</Link> &gt;{" "}
                <Link to="/caes/racao" className="hover:underline">Ração</Link> &gt;{" "}
                <span className="font-semibold text-gray-800">Ração Seca</span>
            </nav>

            {/* Container */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Imagem principal */}
                <div className="flex flex-col items-center">
                    <img src={product.image} alt={product.name} className="mb-2 w-80" />
                    <p className="text-sm text-purple-600 cursor-pointer hover:underline">
                        🔍 Clique para ampliar
                    </p>
                </div>

                {/* Informações do produto */}
                <div className="space-y-4">
                    <p className="text-sm text-gray-600">{product.brand}</p>
                    <h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>
                    <p className="text-sm text-gray-500">Código: 3310549</p>

                    <div className="flex items-center gap-2 text-yellow-500">
                        {"★".repeat(Math.floor(product.rating))}{" "}
                        <span className="text-sm text-gray-600">
                            ({product.reviews} opiniões)
                        </span>
                    </div>

                    {/* Descrição */}
                    <div>
                        <h2 className="font-semibold text-gray-800 text-md">Informações</h2>
                        <ul className="mt-2 space-y-1 text-sm text-gray-700 list-disc list-inside">
                            {product.description.map((desc, i) => (
                                <li key={i}>{desc}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Preço e ação */}
                    <div className="space-y-2">
                        <p className="text-sm text-gray-500 line-through">
                            R$ {product.price.toFixed(2)}
                        </p>
                        <p className="text-2xl font-bold text-orange-600">
                            R$ {product.pricePromo.toFixed(2)} <span className="text-sm text-red-500">-10%</span>
                        </p>
                        <button className="w-full px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700">
                            Adicionar ao carrinho
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
