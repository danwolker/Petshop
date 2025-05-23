// CategoryBar.tsx
import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";

export default function CategoryBar() {
    return (
        <MainLayout>
            <div className="relative z-40 hidden w-full mt-5 overflow-x-auto bg-gray-100 shadow-sm md:block">
                <div className="flex justify-center gap-6 px-4 py-2 mx-auto text-sm font-medium text-gray-800 max-w-7xl whitespace-nowrap">
                    <Link to="/todos" className="hover:text-purple-700">Todos</Link>
                    <Link to="/promocoes" className="font-semibold text-orange-600">Promoções</Link>
                    <Link to="/caes" className="hover:text-purple-700">Cachorros</Link>
                    <Link to="/gatos" className="hover:text-purple-700">Gatos</Link>
                    <Link to="/passaros" className="hover:text-purple-700">Outros Pets</Link>
                    <Link to="/casa" className="hover:text-purple-700">Casa</Link>
                    <Link to="/jardim" className="hover:text-purple-700">Jardim</Link>
                </div>
            </div>
        </MainLayout>
    );
}
