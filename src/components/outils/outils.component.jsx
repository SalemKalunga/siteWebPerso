import { motion } from "framer-motion";
import React from "react";
import { Heading } from "../navbar/navbar.styles";
import { OutilsStyles } from "./outils.styles";

export default function Outils() {
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
        <Heading>Outils</Heading>
        <p>
          Voici les outils que j'utilise pour la construction d'Application web,
          et de site web.
        </p>
        <OutilsStyles>
          <div>HTML</div>
          <div>CSS</div>
          <div>Sass</div>
          <div>Wordpress</div>
          <div>JavaScript</div>
          <div>TypeScript</div>
          <div>PHP</div>
          <div>SQL</div>
          <div>Firebase</div>
          <div>MongoDb</div>
          <div>React</div>
          <div>Redux / Redux-toolkit</div>
          <div>NodeJs</div>
          <div>ExpressJs</div>
          <div>Google & Youtube 😎</div>
        </OutilsStyles>
      </section>
      <br />
      <br />
    </motion.div>
  );
}
