import { motion } from "framer-motion";
import { styled } from "styled-components";
import { COLORS, Flex, MediaQuery } from "../navbar/navbar.styles";

export const MoiContainer = styled(motion.section)`
  position: relative;
  min-height: 50vh;
  ${MediaQuery("tablette")} {
    min-height: 50vh;
    ${Flex("column", "center", "center", "0")};
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  ${MediaQuery("phone")} {
    min-height: 30vh;
    font-size: 2rem;
  }
  width: 100%;
  display: grid;
  padding: 2rem 0;
  place-ites: center;
  grid-template-columns: 1fr 2fr;
  div {
    position: relative;
    img {
      width: 25rem;
      border-radius: 1rem;
      box-shadow: 0px 0px 10px lightgray;
      max-width: 100%;
      transition: all 0.1s;
      &:hover {
        transform: translateY(-1rem);
        box-shadow: 0px 5px 10px gray;
      }
      ${MediaQuery("tablette")} {
        width: 40rem;
      }
      ${MediaQuery("phone")} {
        width: 30rem;
      }
    }
    &:nth-child(2) {
      font-family: "Josefin Sans", sans-serif;
      font-size: 1.6rem;
    }
    line-height: 2.5rem;
    a {
      color: ${COLORS.purple};
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
    .buttons {
      padding: 0.5rem 1rem;
      display: inline-block;
      margin: 1rem;
      color: ${COLORS.blue};
      text-decoration: none;
      box-shadow: 0px 0px 5px gray;
      margin-left: 0;
      border-radius: 0.5rem;
    }
  }
`;
