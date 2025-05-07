// src/pages/ServicosPetPage.tsx
import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import CategoryBar from "../components/controllers/CategoryBar";

export default function ServicosPetPage() {
    const [date, setDate] = useState<Date | null>(new Date());
    const [service, setService] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Serviço agendado para: ${date?.toLocaleDateString()}\nTipo: ${service}`);
    };

    return (
        <>
            <CategoryBar />

            <section className="px-4 py-10">
                <div className="max-w-4xl mx-auto bg-pink-50 rounded-lg shadow-md p-6">
                    <h1 className="text-2xl font-bold text-center text-purple-800 mb-2">
                        Agende Consultas
                    </h1>
                    <p className="text-center text-gray-600 mb-6">
                        Cuide da saúde do seu pet com nossos serviços especializados.
                    </p>

                    <form onSubmit={handleSubmit} className="grid gap-6 md:grid-cols-2">
                        {/* Calendário */}
                        <div className="flex justify-center">
                            <Calendar
                                onChange={(value) => setDate(value as Date)}
                                value={date}
                                locale="pt-BR"
                                className="rounded border shadow-md"
                            />
                        </div>

                        {/* Seleção de serviço + botão */}
                        <div className="flex flex-col justify-center gap-4">
                            <div>
                                <label className="block mb-1 text-sm font-medium text-gray-700">
                                    Tipo de serviço:
                                </label>
                                <select
                                    value={service}
                                    onChange={(e) => setService(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded"
                                    required
                                >
                                    <option value="">Selecione</option>
                                    <option value="consulta">Consulta Veterinária</option>
                                    <option value="vacina">Vacinação</option>
                                    <option value="banho">Corte de unhas</option>
                                </select>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-2 text-white bg-purple-700 rounded hover:bg-purple-800"
                            >
                                Agendar Serviço
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}
