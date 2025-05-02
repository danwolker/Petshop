import Navbar from "../components/controllers/Navbar";
import CategoryBar from "../components/controllers/CategoryBar";
import DeliveryBanner from "../components/Banners/DeliveryBanner";
import Header from "../components/Banners/Header";
import SubHeader from "../components/Banners/SubHeader";
import ExclusiveSection from "../components/sections/ExclusiveSection";
import PetFood from "../components/sections/PetFood";
import ProductsList from "../components/products/ProductsList";
import SubPharmacy from "../components/sections/SubPharmacy";
import PubliSocialMedia from "../components/sections/PubliSocialMedia";
import TestimonialsList from "../components/sections/TestimonialsList";
import BenefitsSection from "../components/sections/BenefitsSection";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface HomePageProps {
  products: Product[];
  showSidebarCart: boolean;
  setShowSidebarCart: React.Dispatch<React.SetStateAction<boolean>>;
  addProductToCart: (id: number) => void;
  selectedProducts: Product[];
  cartTotal: number;
  removeProductFromCart: (id: number) => void;
}

export default function HomePage({
  products,
  showSidebarCart,
  setShowSidebarCart,
  addProductToCart,
  selectedProducts,
  cartTotal,
  removeProductFromCart,
}: HomePageProps) {
  return (
    <>
      <Navbar
        setShowSidebarCart={setShowSidebarCart}
        selectedProducts={selectedProducts}
      />
      <CategoryBar />

      {/* DELIVERY BANNER FIXADO LOGO ABAIXO DA CATEGORYBAR */}
      <div className="px-4 py-2 bg-white sm:px-6 lg:px-8">
        <DeliveryBanner />
      </div>

      {/* RESTANTE DO CONTEÚDO DA PÁGINA */}
      <div className="px-4 mt-8 space-y-6 sm:px-6 lg:px-8">
        <Header />
        <SubHeader />
        <BenefitsSection />
        <ExclusiveSection />

        <div className="section-title">
          <h2 className="mb-4 text-2xl font-bold text-center text-purple-800">
            Produtos em destaque
          </h2>
          <div className="w-24 h-1 mx-auto underline bg-purple-600 rounded"></div>
        </div>

        <ProductsList
          products={products}
          addProductToCart={addProductToCart}
        />

        <PetFood />

        <div className="section-title">
          <h2 className="mb-4 text-2xl font-bold text-center text-purple-800">
            Farmácia
          </h2>
          <div className="w-24 h-1 mx-auto underline bg-purple-600 rounded"></div>
        </div>

        <ProductsList
          products={products}
          addProductToCart={addProductToCart}
        />
        <SubPharmacy />

        <div className="section-title">
          <h2 className="mb-4 text-2xl font-bold text-center text-purple-800">
            Pet Food
          </h2>
          <div className="w-24 h-1 mx-auto underline bg-purple-600 rounded"></div>
        </div>

        <ProductsList
          products={products}
          addProductToCart={addProductToCart}
        />

        <PubliSocialMedia />
        <TestimonialsList />
      </div>
    </>
  );
}
