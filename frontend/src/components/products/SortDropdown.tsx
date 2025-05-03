import React from "react";

interface Props {
    sortBy: string;
    setSortBy: (val: string) => void;
}

export default function SortDropdown({ sortBy, setSortBy }: Props) {
    return (
        <div className="mb-4 text-sm text-right">
            <label className="mr-2 font-medium">Ordenar por:</label>
            <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-2 py-1 border rounded"
            >
                <option value="popular">Mais vendido</option>
                <option value="menorPreco">Menor preço</option>
                <option value="maiorPreco">Maior preço</option>
                <option value="desconto">Melhor desconto</option>
            </select>
        </div>
    );
}
