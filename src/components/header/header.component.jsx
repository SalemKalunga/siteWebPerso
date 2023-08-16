import React from "react";
import { HeaderContainer } from "./header.styles";
import { TypeAnimation } from "react-type-animation";
export default function Header() {
  return (
    <HeaderContainer
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.1 }}
    >
      <div>
        <h1>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed once, initially
              "Bonjour, moi c'est KONI",
              1000,
              "Je suis Développeur Web",
              1000,
              "Concepteur d'Application web, et site internet",
              1000,
              "J'habite en RDC...",
              1000,
              "Contactez-moi 📱",
              1000,
            ]}
            speed={200}
            style={{ fontSize: "2em" }}
            repeat={Infinity}
          />
        </h1>
      </div>
    </HeaderContainer>
  );
}
