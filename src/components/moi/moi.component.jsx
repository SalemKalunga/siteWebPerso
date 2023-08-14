import React from "react";
import photo from "../../assets/images/img1.jpeg";
import { MoiContainer } from "./moi.styles";
import { Link } from "react-router-dom";
import cv from "../../assets/cv.pdf";
export default function Moi() {
  return (
    <MoiContainer
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.1 }}
    >
      <div>
        <img src={photo} alt="KALUNGA KONI" width={300} />
      </div>
      <div>
        <p>
          Bonjour/Bonsoir, moi c'est{" "}
          <em>
            KALUNGA <b>KONI</b> Salem
          </em>
          , je suis Développeur Web Congolais (RDC), avec près de 5 ans
          d'éxpérience dans le domaine. Je maitrise le <em>MERN Stack</em> et un
          tat d'autres téchnologies(outils) pour la concéption de Site internet
          modern, et d'Application web répondant à un besoins spécifique pour
          Booster votre productivité.
        </p>
        <br />
        <p>
          J'ai travailler en Entreprise, mais aussi en Freelance, ce qui m'as
          permis de travailler sur plusieurs projets concrets avec des vrais
          clients. Vous pouvait voir mon travail dans la section{" "}
          <Link to={"portfolio"}>ci-dessous</Link>.
        </p>
        <br />{" "}
        <p>
          Â mes heures perdus j'enseigne la Programmation informatique sur ma{" "}
          <Link to={"https://www.youtube.com/@WazaScriptVf/videos"}>
            chaine youtube
          </Link>
        </p>
        <Link className="buttons" to={"mailto:salemledev@gmail.com"}>
          Contactez-moi
        </Link>
        <Link className="buttons" to={cv}>
          Téléchargez mon CV
        </Link>
      </div>
    </MoiContainer>
  );
}