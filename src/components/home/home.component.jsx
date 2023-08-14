import React from "react";
import { MAIN_CONTAINER } from "../navbar/navbar.styles";
import Header from "../header/header.component";
import Moi from "../moi/moi.component";

export default function Home() {
  return (
    <MAIN_CONTAINER>
      <Header />
      <Moi />
    </MAIN_CONTAINER>
  );
}
