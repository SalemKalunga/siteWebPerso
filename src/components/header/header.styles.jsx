import { motion } from "framer-motion";
import { styled } from "styled-components";
import { Flex, MediaQuery } from "../navbar/navbar.styles";

export const HeaderContainer = styled(motion.section)`
  position: relative;
  min-height: 50vh;
  ${MediaQuery("tablette")} {
    min-height: 50vh;
  }
  ${MediaQuery("phone")} {
    min-height: 30vh;
    font-size: 2rem;
  }
  width: 100%;
  padding: 2rem 0;
  ${Flex("column", "center", "center", "0")};
  div {
    position: relative;
    text-align: center;
    h1 {
      font-size: 4rem;
      ${MediaQuery("tablette")} {
        font-size: 5rem;
      }
      ${MediaQuery("phone")} {
        font-size: 2rem;
      }
    }
  }
`;
