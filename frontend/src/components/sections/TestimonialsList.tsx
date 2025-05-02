import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function TestimonialsList() {
  const partners = [
    { src: "/images/logo_elanco.jpg", alt: "Elanco" },
    { src: "/images/logo_golden.jpg", alt: "Golden" },
    { src: "/images/logo_threedogs.jpg", alt: "ThreeDogs" },
    { src: "/images/logo_golden.jpg", alt: "Golden" }
  ];

  return (
    <section className="bg-white py-12 px-4 text-center">
      <h2 className="text-xl font-bold mb-6">Nossos Parceiros</h2>
      <Swiper
        slidesPerView={2}
        breakpoints={{ 768: { slidesPerView: 3 }, 1024: { slidesPerView: 4 } }}
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {partners.map((partner, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center">
              <img src={partner.src} alt={partner.alt} className="h-16 object-contain" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}