import React from "react";

interface Props {
    filters: any;
    setFilters: (filters: any) => void;
}

export default function FilterSidebar({ filters, setFilters }: Props) {
    const updateFilter = (key: string, value: string) => {
        setFilters((prev: any) => ({
            ...prev,
            [key]: value,
        }));
    };

    return (
        <aside className="w-full p-4 mb-4 rounded shadow sm:w-64 bg-gray-50 sm:mb-0">
            <h2 className="mb-4 font-semibold">Filtros</h2>

            <div className="mb-3">
                <label className="block mb-1 font-medium">Tipo</label>
                <select onChange={(e) => updateFilter("type", e.target.value)} className="w-full px-2 py-1 border rounded">
                    <option value="">Todos</option>
                    <option value="seca">Ração Seca</option>
                    <option value="umida">Ração Úmida</option>
                    <option value="petisco">Petisco</option>
                    <option value="bifinho">Bifinho</option>
                </select>
            </div>

            <div className="mb-3">
                <label className="block mb-1 font-medium">Marca</label>
                <input onChange={(e) => updateFilter("brand", e.target.value)} className="w-full px-2 py-1 border rounded" />
            </div>

            <div className="mb-3">
                <label className="block mb-1 font-medium">Porte</label>
                <input onChange={(e) => updateFilter("porte", e.target.value)} className="w-full px-2 py-1 border rounded" />
            </div>

            <div className="mb-3">
                <label className="block mb-1 font-medium">Idade</label>
                <input onChange={(e) => updateFilter("idade", e.target.value)} className="w-full px-2 py-1 border rounded" />
            </div>

            <div className="mb-3">
                <label className="block mb-1 font-medium">Sabor</label>
                <input onChange={(e) => updateFilter("sabor", e.target.value)} className="w-full px-2 py-1 border rounded" />
            </div>
        </aside>
    );
}
