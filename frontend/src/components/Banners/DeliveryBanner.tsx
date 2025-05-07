import React from "react";

export default function DeliveryBanner() {
    return (
        <div className="flex justify-center w-full">
            <div className="w-full max-w-5xl px-6 py-3 mt-2 font-semibold text-center text-white rounded-full shadow-md bg-lime-500">
                <span role="img" aria-label="Entrega">
                    🚚 💸
                </span>{" "}
                Comprou, <span className="font-bold">chegou!</span> Seu pedido entregue
                em até <span className="font-bold">1 hora*</span>.
            </div>
        </div>
    );
}
