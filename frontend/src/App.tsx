// src/App.tsx
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/controllers/Navbar";
import SidebarCart from "./components/controllers/SidebarCart";
import Footer from "./components/sections/Footer";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";

// Menu Pages
import TodosPage from "./pages/menu/TodosPage";
import PromocoesPage from "./pages/menu/PromocoesPage";
import CaesPage from "./pages/menu/CaesPage";
import GatosPage from "./pages/menu/GatosPage";
import Others from "./pages/menu/Others";
import CasaPage from "./pages/menu/CasaPage";
import JardimPage from "./pages/menu/JardimPage";

import { Product } from "./types/Product";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [showSidebarCart, setShowSidebarCart] = useState(false);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    fetch("/Products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch(console.error);
  }, []);

  const addProductToCart = (id: number) => {
    const product = products.find((p) => p.id === id);
    if (!product || selectedProducts.some((p) => p.id === id)) return;
    setSelectedProducts([...selectedProducts, product]);
    setCartTotal((prev) => prev + product.price);
  };

  const removeProductFromCart = (id: number) => {
    const product = selectedProducts.find((p) => p.id === id);
    if (!product) return;
    setSelectedProducts(selectedProducts.filter((p) => p.id !== id));
    setCartTotal((prev) => prev - product.price);
  };

  return (
    <div className="pt-20">
      <Navbar setShowSidebarCart={setShowSidebarCart} selectedProducts={selectedProducts} />
      <SidebarCart
        setShowSidebarCart={setShowSidebarCart}
        showSidebarCart={showSidebarCart}
        selectedProducts={selectedProducts}
        cartTotal={cartTotal}
        removeProductFromCart={removeProductFromCart}
      />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              products={products}
              showSidebarCart={showSidebarCart}
              setShowSidebarCart={setShowSidebarCart}
              addProductToCart={addProductToCart}
              selectedProducts={selectedProducts}
              cartTotal={cartTotal}
              removeProductFromCart={removeProductFromCart}
            />
          }
        />
        <Route path="/produtos" element={<ProductsPage products={products} addProductToCart={addProductToCart} />} />
        <Route path="/todos" element={<TodosPage products={products} addProductToCart={addProductToCart} />} />
        <Route path="/promocoes" element={<PromocoesPage products={products} addProductToCart={addProductToCart} />} />
        <Route path="/caes" element={<CaesPage products={products} addProductToCart={addProductToCart} />} />
        <Route path="/gatos" element={<GatosPage products={products} addProductToCart={addProductToCart} />} />
        <Route path="/passaros" element={<Others products={products} addProductToCart={addProductToCart} />} />
        <Route path="/casa" element={<CasaPage products={products} addProductToCart={addProductToCart} />} />
        <Route path="/jardim" element={<JardimPage products={products} addProductToCart={addProductToCart} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
