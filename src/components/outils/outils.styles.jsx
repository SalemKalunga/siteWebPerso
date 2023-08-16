import { styled } from "styled-components";
import { COLORS } from "../navbar/navbar.styles";

export const OutilsStyles = styled.div`
  position: relative;
  padding: 5rem 2rem;
  div {
    position: relative;
    display: inline-block;
    border: 2px solid;
    padding: 0.3rem 1rem;
    margin: 0.5rem;
    border-radius: 2rem;
    cursor: pointer;
    &:hover {
      color: ${COLORS.purple};
    }
  }
`;
