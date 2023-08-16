import React from "react";
import { MoiContainer } from "../moi/moi.styles";
import { FaNodeJs, FaReact, FaSearch, FaSearchengin } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoTypescript,
} from "react-icons/bi";
import { Heading } from "../navbar/navbar.styles";
import { CompetencesStyle } from "./competences.styles";
export default function Competences() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.1 }}
    >
      <br />
      <br />
      <section>
        <Heading>Compétences</Heading>
        <p>
          Je fais de l'Analyse, de la Conception, et du Développement de Système
          d'Information Logiciel...
        </p>

        <CompetencesStyle>
          <div>
            <FaSearchengin />
            <h2>Analyse de besoins</h2>
            <p>
              La toute première phase de conception de tout système Logiciel,
              c'est L'étude de besoins de l'Utilisateur. C'est sur base du
              résultat de cette étude que tout le Système Logiciel seras
              Construit.
            </p>
          </div>
          <div>
            <FaSearchengin />
            <h2>Conception Architecturale</h2>
            <p>
              C'est dans cette phase que l'Ingénieur Modélise le future système
              Logiciel. En d'autre terme il détermine la structure du
              système(Application) et quels téchnologies(Outils) seront utilisés
              pour sa Construction.
            </p>
          </div>
          <div>
            <FaSearchengin />
            <h2>Développement</h2>
            <p>
              Dans la phase de développement, l'Ingénieur peut finallement
              passer à l'Implémentation(Codage), au Test du Système jusqu'à
              obtenir le produit finis, ensuite vient le Déploiement(mis en
              service) du système conçu.
            </p>
          </div>
        </CompetencesStyle>
      </section>
      <br />
      <br />
    </motion.div>
  );
}
