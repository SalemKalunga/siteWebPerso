import { styled } from "styled-components";
import { COLORS, Flex } from "../navbar/navbar.styles";

export const ContactLogos = styled.section`
  position: relative;
  padding: 2rem;
  ${Flex("column", "center", "center", "1rem")};
  a {
    text-decoration: none;
    font-size: 2rem;
    color: ${COLORS.black};
    &:hover {
      color: ${COLORS.purple};
    }
  }
`;
