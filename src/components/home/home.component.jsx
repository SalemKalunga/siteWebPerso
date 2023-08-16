import React from "react";
import Header from "../header/header.component";
import Moi from "../moi/moi.component";
import Portfolio from "../portfolio/portfolio.component";
import Competences from "../competences/competences.component";
import Contact from "../contact/contact.component";

export default function Home() {
  return (
    <>
      <Header />
      <Moi />
      <Portfolio />
      <Competences />
      <Contact />
    </>
  );
}
