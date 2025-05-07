// src/components/Banners/Header.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Header() {
  return (
    <section className="mt-6">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop
        className="w-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="grid items-center grid-cols-1 gap-4 p-4 rounded shadow-md md:grid-cols-2 bg-pink-50">
            <div className="space-y-3 text-center md:text-left">
              <h2 className="text-3xl font-bold text-purple-800">Barriguinha cheia, seu pet feliz!</h2>
              <p className="text-gray-600">Ofertas especiais em rações selecionadas.</p>
            </div>
            <div className="flex justify-center">
              <img src="/images/credeli.jpg" alt="Credeli 1" className="object-contain h-40" />
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="grid items-center grid-cols-1 gap-4 p-4 rounded shadow-md md:grid-cols-2 bg-pink-50">
            <div className="space-y-3 text-center md:text-left">
              <h2 className="text-3xl font-bold text-purple-800">Cuidados e beleza para pets</h2>
              <p className="text-gray-600">Conheça nossa linha de cosméticos pet!</p>
            </div>
            <div className="flex justify-center">
              <img src="/images/credeli.jpg" alt="Cosméticos" className="object-contain h-40" />
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="grid items-center grid-cols-1 gap-4 p-4 rounded shadow-md md:grid-cols-2 bg-pink-50">
            <div className="space-y-3 text-center md:text-left">
              <h2 className="text-3xl font-bold text-purple-800">Descontos imperdíveis!</h2>
              <p className="text-gray-600">Veja nossos produtos em oferta.</p>
            </div>
            <div className="flex justify-center">
              <img src="/images/credeli.jpg" alt="Promoções" className="object-contain h-40" />
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 4 (Extra para evitar erro do Swiper) */}
        <SwiperSlide>
          <div className="grid items-center grid-cols-1 gap-4 p-4 rounded shadow-md md:grid-cols-2 bg-pink-50">
            <div className="space-y-3 text-center md:text-left">
              <h2 className="text-3xl font-bold text-purple-800">Nossas Entregas</h2>
              <p className="text-gray-600">Confira nossas taxas de entregas para sua região.</p>
            </div>
            <div className="flex justify-center">
              <img src="/images/credeli.jpg" alt="Promoções" className="object-contain h-40" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
