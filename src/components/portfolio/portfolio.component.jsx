import React from "react";
import { Heading } from "../navbar/navbar.styles";
import { motion } from "framer-motion";
import im1 from "../../assets/images/p7.png";
import im2 from "../../assets/images/p9.png";
import im3 from "../../assets/images/p4.png";
import im4 from "../../assets/images/p5.png";
import im5 from "../../assets/images/p8.png";
import im6 from "../../assets/images/p10.png";
import im7 from "../../assets/images/p2.png";
import im8 from "../../assets/images/code_2.jpeg";
import { ProjectsContainer, SingleProject } from "./portfolio.styles";
import { Link } from "react-router-dom";
export default function Portfolio() {
  const INITIAL = [
    {
      id: 1,
      name: "Computer Boss",
      short_desc:
        "Une application web e-commerce modern avec toutes les fonctionnalitées de Gestion d'Articles, et de Rating sur chaque article par les utilisateurs authentifié.",
      stack: [
        "JavaScript",
        "ReactJs",
        "Redux/Redux-toolki",
        "Firebase",
        "Sass",
        "StyledComponents",
        "ReactQuill",
      ],
      path: "https:compboss.netlify.com",
      photo: im1,
    },
    {
      id: 2,
      name: "School Management System",
      short_desc:
        "Une  application web incluant un Système de délibération en Ligne pour une école. Chaque élève a la possibilité de se conecter à son Espace élève, voir le résultat affiché.",
      stack: [
        "JavaScript",
        "ReactJs",
        "Redux/Redux-toolki",
        "MongoDb",
        "NodeJs",
        "ExpressJs",
      ],
      path: "https:rocher.onrender.com",
      photo: im6,
    },
    {
      id: 3,
      name: "ABS Congo",
      short_desc:
        "Un site internet multi-langues pour entreprise de Fourniture de matériel Informatique en R.D.C, un site e-commerce.",
      stack: ["HTML", "SASS", "Wordpress", "JavaScript", "SQL", "PHP"],
      path: "https:abscongo.com",
      photo: im7,
    },
    {
      id: 4,
      name: "Jupiter Sécurity",
      short_desc:
        "Un site internet multi-langues pour une entreprise Congolaise de Sécurité fournissant des Gardes du Corps à ses Clients ",
      stack: ["HTML", "SASS", "Wordpress", "JavaScript", "SQL", "PHP"],
      path: "https:jupitersecurity.org",
      photo: im2,
    },
    {
      id: 5,
      name: "Collège Rocher des Âges",
      short_desc:
        "Un site internet pour le collège Rôcher des Âges, une école Congolaise situé dans la Ville de Lubumbashi.",
      stack: ["Wordpress"],
      path: "https:wazascript.com/college",
      photo: im5,
    },
    {
      id: 6,
      name: "CS Galaxy",
      short_desc:
        "Un site internet pour le Complexe Scholaire Rôcher des Âges, une école Congolaise situé dans la Ville de Lubumbashi.",
      stack: ["Wordpress"],
      path: "https:wazascript.com/galaxy",
      photo: im8,
    },
    {
      id: 7,
      name: "WazaScript",
      short_desc:
        "Un site internet pour la Startup WazaScript, dont je suis le fondateur. Une Startup fournissant des services de Création de site internet, du Graphique Design, du Montage Vidéo, de l'Impréssion etc.",
      stack: ["Wordpress"],
      path: "https:wazascript.com",
      photo: im3,
    },
    {
      id: 7,
      name: "BuyNow",
      short_desc: "Un site internet de e-commerce construit en WORDPRESS",
      stack: ["Wordpress"],
      path: "https:wazascript.com/buynow",
      photo: im4,
    },
  ];

  const showProjects = (list) => {
    return list.map(({ id, name, short_desc, stack, path, photo }) => {
      return (
        <SingleProject key={id}>
          <div>
            <img src={photo} width={300} alt="desc" />
          </div>
          <div>
            <Link to={path}>
              <h3>{name}</h3>
            </Link>
            <p>{short_desc}</p>
            <p>
              <b>TECH STACK</b>
            </p>

            <div>
              {stack.map((el) => {
                return <aside>{el}</aside>;
              })}
            </div>
          </div>
        </SingleProject>
      );
    });
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.1 }}
    >
      <Heading>Portfolio</Heading>
      <p>
        Voici quelques éxemples de Projets sur lesquelles j'ai travailler...
      </p>
      <br />
      <ProjectsContainer>{showProjects(INITIAL)}</ProjectsContainer>
      <br />
      <br />
    </motion.div>
  );
}
