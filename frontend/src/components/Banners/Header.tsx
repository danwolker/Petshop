import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

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
        <SwiperSlide>
          <div className="grid items-center grid-cols-1 gap-4 p-4 rounded shadow-md md:grid-cols-2 bg-pink-50">

            <div className="space-y-3 text-center md:text-left">
              <h2 className="text-3xl font-bold text-purple-800">Barriguinha cheia, seu pet feliz!</h2>
              <p className="text-gray-600">Ofertas especiais em rações selecionadas.</p>
              <Link to="/farmacia" className="inline-block px-5 py-2 text-sm text-white bg-purple-600 rounded-full hover:bg-purple-700">
                Farmácia
              </Link>
            </div>
            <div className="flex justify-center">
              <img src="/images/racao-destaque.png" alt="Farmácia" className="object-contain h-40" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="grid items-center grid-cols-1 gap-4 p-4 rounded shadow-md md:grid-cols-2 bg-pink-50">

            <div className="space-y-3 text-center md:text-left">
              <h2 className="text-3xl font-bold text-purple-800">Cuidados e beleza para pets</h2>
              <p className="text-gray-600">Conheça nossa linha de cosméticos pet!</p>
              <Link to="/cosmeticos" className="inline-block px-5 py-2 text-sm text-white bg-purple-600 rounded-full hover:bg-purple-700">
                Cosméticos
              </Link>
            </div>
            <div className="flex justify-center">
              <img src="/images/cosmeticos-pet.png" alt="Cosméticos" className="object-contain h-40" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="grid items-center grid-cols-1 gap-4 p-4 rounded shadow-md md:grid-cols-2 bg-pink-50">
            <div className="space-y-3 text-center md:text-left">
              <h2 className="text-3xl font-bold text-purple-800">Descontos imperdíveis!</h2>
              <p className="text-gray-600">Veja nossos produtos em oferta.</p>
              <Link to="/promocoes" className="inline-block px-5 py-2 text-sm text-white bg-purple-600 rounded-full hover:bg-purple-700">
                Promoções
              </Link>
            </div>
            <div className="flex justify-center">
              <img src="/images/promocao.png" alt="Promoções" className="object-contain h-40" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
