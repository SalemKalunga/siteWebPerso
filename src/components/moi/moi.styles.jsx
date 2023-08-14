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
      box-shadow: 0px 0px 30px lightgray;
      max-width: 100%;
      transition: all 0.2s;
      &:hover {
        transform: scale(1.2);
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
      font-size: 2rem;
    }
    line-height: 2.5rem;
    a {
      color: ${COLORS.purple};
      text-decoration: none;
    }
    .buttons {
      padding: 1rem;
      display: inline-block;
      background-color: ${COLORS.purple};
      margin: 1rem;
      color: ${COLORS.white};
      text-decoration: none;
      box-shadow: 0px 0px 5px gray;
      border: 1px solid ${COLORS.purple};
      margin-left: 0;
    }
  }
`;
