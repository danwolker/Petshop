import React, { useState } from "react";
import { Product } from "../../types/Product";
import SidebarFilter from "../../components/controllers/SidebarFilter";
import OrderSelector from "../../components/controllers/OrderSelector";
import ProductGrid from "../../components/products/ProductGrid";
import TestimonialsList from "../../components/sections/TestimonialsList";
import SubPharmacy from "../../components/sections/SubPharmacy";
import DeliveryBanner from "../../components/Banners/DeliveryBanner";
import CategoryBar from "../../components/controllers/CategoryBar";

interface Props {
    products: Product[];
    addProductToCart: (id: number) => void;
}

export default function PromocoesPage({ products, addProductToCart }: Props) {
    const [order, setOrder] = useState("mais-vendido");

    return (
        <div className="px-4 space-y-6 sm:px-6 lg:px-8 ">
            <CategoryBar />
            <DeliveryBanner />
            <h1 className="mb-2 text-2xl font-bold text-center text-purple-800">Promoções</h1>
            <p className="mb-4 text-center text-gray-700">
                Aqui você encontra os melhores produtos com desconto. Confira as promoções imperdíveis que preparamos para você.
            </p>
            <div className="flex flex-col gap-6 lg:flex-row">
                <SidebarFilter />
                <div className="flex-1">
                    <OrderSelector order={order} setOrder={setOrder} />
                    <ProductGrid />
                </div>
            </div>
            <SubPharmacy />
            <TestimonialsList />
        </div>
    );
}
