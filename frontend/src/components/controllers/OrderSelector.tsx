// src/components/controllers/OrderSelector.tsx
import React from "react";

interface OrderSelectorProps {
    order: string;
    setOrder: (value: string) => void;
}

export default function OrderSelector({ order, setOrder }: OrderSelectorProps) {
    return (
        <div className="flex justify-end mb-4">
            <select
                className="p-2 border rounded-md"
                value={order}
                onChange={(e) => setOrder(e.target.value)}
            >
                <option value="mais-vendido">Mais vendido</option>
                <option value="menor-preco">Menor preço</option>
                <option value="maior-preco">Maior preço</option>
                <option value="melhor-desconto">Melhor desconto</option>
            </select>
        </div>
    );
}
