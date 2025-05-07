// src/pages/ComprasProgramadasPage.tsx
import React from "react";

export default function ComprasProgramadasPage() {
    return (
        <div className="max-w-screen-md px-4 py-12 mx-auto text-center">
            <h1 className="mb-4 text-3xl font-bold text-purple-800">Agende suas Compras</h1>
            <p className="mb-6 text-gray-600">Escolha a data para receber seus produtos preferidos com comodidade e economia.</p>

            <div className="p-6 space-y-4 bg-white rounded shadow">
                <label className="block text-sm font-medium text-left text-gray-700">Escolha uma data:</label>
                <input type="date" className="w-full px-4 py-2 text-gray-700 border rounded" />

                <label className="block text-sm font-medium text-left text-gray-700">Mensagem adicional:</label>
                <textarea className="w-full px-4 py-2 text-gray-700 border rounded" rows={4}></textarea>

                <button className="w-full py-2 mt-2 text-white bg-purple-700 rounded hover:bg-purple-800">
                    Agendar Compra
                </button>
            </div>
        </div>
    );
}
