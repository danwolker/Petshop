import { Link } from "react-router-dom";
import Product from "./Product";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface ProductProps {
  id: number;
  name: string;
  image: string;
  price: number;
}

interface ProductsListProps {
  products: ProductProps[];
  addProductToCart: (id: number) => void;
}

export default function ProductsList({ products, addProductToCart }: ProductsListProps) {
  const uniqueProducts = Array.from(new Set(products.map((p) => p.id))).map((id) =>
    products.find((p) => p.id === id)
  );

  return (
    <section className="px-4 py-10">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={uniqueProducts.length > 1}
      >
        {uniqueProducts.map((product) => (
          <SwiperSlide key={product?.id}>
            <Link to={`/produto/${product?.id}`}>
              <Product {...product!} addProductToCart={addProductToCart} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
