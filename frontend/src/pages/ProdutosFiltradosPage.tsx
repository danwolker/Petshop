import React, { useEffect, useState } from "react";
import FilterSidebar from "../components/products/FilterSidebar";
import SortDropdown from "../components/products/SortDropdown";
import ProductGrid from "../components/products/ProductGrid";

interface Product {
    id: number;
    name: string;
    price: number;
    discountPrice?: number;
    image: string;
    type?: string;
    brand?: string;
    porte?: string;
    idade?: string;
    sabor?: string;
}

export default function ProdutosFiltradosPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [filters, setFilters] = useState<any>({});
    const [sortBy, setSortBy] = useState("popular");

    const [filtered, setFiltered] = useState<Product[]>([]);

    useEffect(() => {
        fetch("/Products.json")
            .then((res) => res.json())
            .then((data) => setProducts(data.products || []));
    }, []);

    useEffect(() => {
        let result = [...products];

        if (filters.type) result = result.filter((p) => p.type === filters.type);
        if (filters.brand) result = result.filter((p) => p.brand?.toLowerCase().includes(filters.brand.toLowerCase()));
        if (filters.porte) result = result.filter((p) => p.porte?.toLowerCase().includes(filters.porte.toLowerCase()));
        if (filters.idade) result = result.filter((p) => p.idade?.toLowerCase().includes(filters.idade.toLowerCase()));
        if (filters.sabor) result = result.filter((p) => p.sabor?.toLowerCase().includes(filters.sabor.toLowerCase()));

        switch (sortBy) {
            case "menorPreco":
                result.sort((a, b) => (a.discountPrice ?? a.price) - (b.discountPrice ?? b.price));
                break;
            case "maiorPreco":
                result.sort((a, b) => (b.discountPrice ?? b.price) - (a.discountPrice ?? a.price));
                break;
            case "desconto":
                result.sort(
                    (a, b) =>
                        ((b.price - (b.discountPrice ?? b.price)) - (a.price - (a.discountPrice ?? a.price)))
                );
                break;
            default:
                break;
        }

        setFiltered(result);
    }, [filters, sortBy, products]);

    const addToCart = (id: number) => {
        alert(`Produto ${id} adicionado ao carrinho`);
    };

    return (
        <div className="px-4 py-8 mx-auto max-w-7xl">
            <div className="flex flex-col gap-6 md:flex-row">
                <FilterSidebar filters={filters} setFilters={setFilters} />
                <div className="flex-1">
                    <SortDropdown sortBy={sortBy} setSortBy={setSortBy} />
                    <ProductGrid products={filtered} addProductToCart={addToCart} />

                </div>
            </div>
        </div>
    );
}
