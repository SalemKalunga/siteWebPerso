import React from "react";
import { MoiContainer } from "../moi/moi.styles";

export default function Portfolio() {
  return (
    <MoiContainer
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.1 }}
    >
      <h1>Portfolio</h1>
    </MoiContainer>
  );
}
