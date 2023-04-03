import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./Products";
import Home from "./Home";
import "./css/sass/pages/app.css";
import Product from "./Product";

import ByCategory from "./pages/ByCategory";
import Contact from "./pages/Contact";
import ByBrand from "./pages/ByBrand";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products">
          <Route index element={<Products />} />
          <Route path=":id" element={<Product />} />
        </Route>
        <Route path="/keyboards" element={<ByCategory />} />
        <Route path="/mice" element={<ByCategory />} />
        <Route path="/headsets" element={<ByCategory />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/razer" element={<ByBrand />} />
        <Route path="/crosair" element={<ByBrand />} />
        <Route path="/logitech" element={<ByBrand />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
