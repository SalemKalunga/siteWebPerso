import React from "react";
import Header from "../header/header.component";
import Moi from "../moi/moi.component";
import Portfolio from "../portfolio/portfolio.component";
import Competences from "../competences/competences.component";
import Contact from "../contact/contact.component";
import Outils from "../outils/outils.component";

export default function Home() {
  return (
    <>
      <Header />
      <Moi />
      <Competences />
      <Outils />
      <Portfolio />
      <Contact />
    </>
  );
}
