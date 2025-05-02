import Header from "../components/Banners/Header";
import SubHeader from "../components/Banners/SubHeader";
import ExclusiveSection from "../components/sections/ExclusiveSection";
import PetFood from "../components/sections/PetFood";
import ProductsList from "../components/products/ProductsList";
import SubPharmacy from "../components/sections/SubPharmacy";
import PubliSocialMedia from "../components/sections/PubliSocialMedia";
import TestimonialsList from "../components/sections/TestimonialsList";

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
    <div className="space-y-12">
      <Header />
      <SubHeader />
      <ExclusiveSection />
      <div className="page-inner-content">
        <div className="section-title">
          <div className="underline"></div>
        </div>
        <div className="main-content">
          <ProductsList products={products} addProductToCart={addProductToCart} />
        </div>
      </div>

      <PetFood />
      <SubPharmacy />
      <PubliSocialMedia />
      <TestimonialsList />
    </div>
  );
}
