import React from "react";
import { Route, Routes } from "react-router-dom";
import { NavBar } from "../navbar/navbar.styles";
import Home from "../home/home.component";
import Moi from "../moi/moi.component";
import NavbarComponent from "../navbar/navbar.compnent";

export default function RouterCompt() {
  return (
    <Routes>
      <Route path="/" element={<NavbarComponent />}>
        <Route index element={<Home />} />
        <Route path="moi" element={<Moi />} />
      </Route>
    </Routes>
  );
}
