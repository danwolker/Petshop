// src/components/controllers/SidebarFilter.tsx
import React from "react";

export default function SidebarFilter() {
    return (
        <aside className="w-full p-4 mb-6 bg-white border rounded shadow-md sm:w-64 sm:mb-0">
            <div className="mb-4">
                <h3 className="text-lg font-semibold">Tipo de Produto</h3>
                <ul className="mt-2 space-y-1">
                    <li><input type="checkbox" /> Ração Seca</li>
                    <li><input type="checkbox" /> Ração Úmida</li>
                    <li><input type="checkbox" /> Petisco</li>
                    <li><input type="checkbox" /> Bifinho</li>
                </ul>
            </div>

            <div className="mb-4">
                <h3 className="text-lg font-semibold">Marca</h3>
                <ul className="mt-2 space-y-1">
                    <li><input type="checkbox" /> Golden</li>
                    <li><input type="checkbox" /> Bravecto</li>
                </ul>
            </div>

            <div className="mb-4">
                <h3 className="text-lg font-semibold">Porte</h3>
                <ul className="mt-2 space-y-1">
                    <li><input type="checkbox" /> Pequeno</li>
                    <li><input type="checkbox" /> Médio</li>
                    <li><input type="checkbox" /> Grande</li>
                </ul>
            </div>

            <div className="mb-4">
                <h3 className="text-lg font-semibold">Idade</h3>
                <ul className="mt-2 space-y-1">
                    <li><input type="checkbox" /> Filhote</li>
                    <li><input type="checkbox" /> Adulto</li>
                </ul>
            </div>

            <div>
                <h3 className="text-lg font-semibold">Sabor</h3>
                <ul className="mt-2 space-y-1">
                    <li><input type="checkbox" /> Frango</li>
                    <li><input type="checkbox" /> Carne</li>
                    <li><input type="checkbox" /> Peixe</li>
                </ul>
            </div>
        </aside>
    );
}
