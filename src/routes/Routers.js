import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Header from "../components/header/Header";
import ChooseUs from "../components/choose-us/ChooseUs";
import AgePack from "../components/age-pack/AgePack";
import Footer from "../components/footer/Footer";
import NotFoundPage from "../pages/NotFoundPage";


const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Toys" element={<Header />} />
      <Route path="/About" element={<ChooseUs />} />
      <Route path="/Category" element={<AgePack />} />
      <Route path="/Contact" element={<Footer />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Routers;
