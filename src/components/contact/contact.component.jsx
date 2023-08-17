import React from "react";
import { Heading } from "../navbar/navbar.styles";
import {
  BiLogoYoutube,
  BiLogoGmail,
  BiLogoGithub,
  BiPhoneCall,
} from "react-icons/bi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ContactLogos } from "./contact.styles";
export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.1 }}
    >
      <Heading>Contactez - moi</Heading>
      <ContactLogos>
        <Link to={"https://github.com/SalemKalunga"}>
          <BiLogoGithub /> Salem Kalunga
        </Link>
        <Link to={"mailto:salemledev@gmail.com"}>
          <BiLogoGmail /> salem le dev
        </Link>
        <Link to={"tel:+243844325749"}>
          <BiPhoneCall /> +243843225749
        </Link>
        <Link to={"https://www.youtube.com/@WazaScriptVf/videos"}>
          <BiLogoYoutube /> WazaScript
        </Link>
      </ContactLogos>
    </motion.div>
  );
}
