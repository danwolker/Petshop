// src/pages/ComprasProgramadasPage.tsx
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import CategoryBar from "../components/controllers/CategoryBar";

export default function ComprasProgramadasPage() {
    const [date, setDate] = useState<Date | null>(new Date());
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Compra agendada para: ${date?.toLocaleDateString()}\nObservação: ${message}`);
    };

    return (
        <>
            <CategoryBar />
            <div className="flex justify-center px-4 py-8 sm:py-12">
                <div className="w-full max-w-4xl p-6 bg-pink-50 rounded shadow-md">
                    <h1 className="mb-2 text-3xl font-bold text-center text-purple-800">Agende suas Compras</h1>
                    <p className="mb-6 text-center text-gray-600">
                        Escolha a data para receber seus produtos preferidos com comodidade e economia.
                    </p>

                    <form onSubmit={handleSubmit} className="grid gap-8 sm:grid-cols-2">
                        {/* Calendário */}
                        <div className="flex justify-center">
                            <Calendar
                                onChange={(value) => setDate(value as Date)}
                                value={date}
                                locale="pt-BR"
                            />
                        </div>

                        {/* Formulário à direita */}
                        <div className="flex flex-col justify-between space-y-4">
                            <div className="text-left">
                                <label className="block mb-1 text-sm font-medium text-gray-700">Mensagem adicional:</label>
                                <textarea
                                    placeholder="Digite uma observação sobre a entrega..."
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    rows={6}
                                    className="w-full px-4 py-2 text-gray-700 border rounded"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-2 mt-2 text-white bg-purple-700 rounded hover:bg-purple-800"
                            >
                                Agendar Compra
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
