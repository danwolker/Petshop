import React, { useState } from "react";

export default function SidebarFilter() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Botão Filtros visível apenas no mobile */}
            <div className="px-4 mb-4 sm:hidden">
                <button
                    className="w-full px-4 py-2 text-sm font-semibold text-white bg-purple-600 rounded hover:bg-purple-700"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? "Fechar Filtros" : "Filtros"}
                </button>
            </div>

            {/* Filtros: visíveis no desktop ou quando abertos no mobile */}
            {(isOpen || window.innerWidth >= 640) && (
                <aside
                    className={`w-full sm:w-64 p-4 mb-6 bg-white border rounded shadow-md transition-all duration-300 ease-in-out ${isOpen ? "block" : "hidden sm:block"
                        }`}
                >
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
            )}
        </>
    );
}
