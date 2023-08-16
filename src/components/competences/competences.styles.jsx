import { styled } from "styled-components";
import { COLORS, Flex, MediaQuery } from "../navbar/navbar.styles";

export const CompetencesStyle = styled.div`
  position: relative;
  display: grid;
  padding: 2rem;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  width: 100%;
  ${MediaQuery("phone")} {
    grid-template-columns: repeat(1, 1fr);
  }
  div {
    border: 1px solid ${COLORS.black};
    padding: 2rem;
    box-shadow: 5px 5px 5px ${COLORS.black};
    transition: all 0.2s ease;
    font-family: "Bricolage Grotesque", sans-serif;

    ${Flex("column", "center", "baseline", "1rem")};
    &:hover {
      transform: translate(1rem, -1rem);
      box-shadow: 7px 7px 10px gray;
    }
    ${MediaQuery("phone")} {
      z-index: 10;

      &:hover {
        transform: translate(-0.3rem, -0.3rem);
        box-shadow: 7px 7px 5px gray;
      }
    }
  }
`;
