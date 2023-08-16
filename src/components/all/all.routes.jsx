import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { MAIN_CONTAINER } from "../navbar/navbar.styles";
import Home from "../home/home.component";
import Moi from "../moi/moi.component";
import NavbarComponent from "../navbar/navbar.compnent";
import Portfolio from "../portfolio/portfolio.component";
import Competences from "../competences/competences.component";
import Contact from "../contact/contact.component";
import { AnimatePresence } from "framer-motion";
import Outils from "../outils/outils.component";

export default function RouterCompt() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <MAIN_CONTAINER>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<NavbarComponent />}>
            <Route index element={<Home />} />
            <Route path="moi" element={<Moi />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="competences" element={<Competences />} />
            <Route path="contact" element={<Contact />} />
            <Route path="outils" element={<Outils />} />
          </Route>
        </Routes>
      </MAIN_CONTAINER>
    </AnimatePresence>
  );
}
