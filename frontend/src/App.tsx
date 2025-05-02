import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/controllers/Navbar";
import SidebarCart from "./components/controllers/SidebarCart";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import Footer from "./components/sections/Footer";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [showSidebarCart, setShowSidebarCart] = useState(false);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    fetch("/Products.json")
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao carregar JSON");
        return res.json();
      })
      .then((data) => setProducts(data.products))
      .catch((err) => console.error(err));
  }, []);

  const addProductToCart = (id: number) => {
    const product = products.find((p) => p.id === id);
    if (!product) return;
    if (selectedProducts.find((p) => p.id === id)) return;

    const updatedCart = [...selectedProducts, product];
    setSelectedProducts(updatedCart);
    setCartTotal((prev) => prev + product.price);
  };

  const removeProductFromCart = (id: number) => {
    const product = selectedProducts.find((p) => p.id === id);
    if (!product) return;

    const updatedCart = selectedProducts.filter((p) => p.id !== id);
    setSelectedProducts(updatedCart);
    setCartTotal((prev) => prev - product.price);
  };

  return (
    <div className="pt-20">
      <Navbar
        setShowSidebarCart={setShowSidebarCart}
        selectedProducts={selectedProducts}
      />
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
        <Route
          path="/produtos"
          element={
            <ProductsPage
              products={products}
              addProductToCart={addProductToCart}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
