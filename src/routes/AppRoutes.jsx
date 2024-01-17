import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Leyout from "../components/Leyout/Leyout";
import ProductsPage from "../pages/Products/ProductsPage";
import Home from "../pages/Home/Home";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Leyout />}>
          <Route index element={<Home/>} />
          <Route path="/products" element={<h1>hello world</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
