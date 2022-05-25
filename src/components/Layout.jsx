import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Notfound from "../pages/Notfound";
import ProductPage from "../pages/ProductPage";
import ProductViewPage from "../pages/ProductViewPage";
import CardtPage from "../pages/CartPage";
import Nav from "./Nav";

function Layout() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<ProductPage />} />
          <Route path="/:name" element={<ProductViewPage />} />
          <Route path="/cartPage" element={<CardtPage />} />

          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Layout;
