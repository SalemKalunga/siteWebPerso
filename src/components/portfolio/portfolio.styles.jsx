import { styled } from "styled-components";
import { COLORS, Flex, MediaQuery } from "../navbar/navbar.styles";

export const ProjectsContainer = styled.section`
  position: relative;
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  ${MediaQuery("tablette")} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${MediaQuery("phone")} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const SingleProject = styled.div`
  position: relative;
  border: 1px solid;
  box-shadow: 5px 5px 5px lightgray;
  a {
    text-decoration: none;
    color: ${COLORS.purple};
    &:hover {
      text-decoration: underline;
    }
  }
  div {
    &:has(img) {
      position: relative;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
  div {
    ${Flex("column", "baseline", "center", "1rem")};
    padding: 1rem 0;
    text-align: center;
    &:nth-child(2) {
      div {
        display: block;
        width: 100%;
        aside {
          display: inline-block;
          border: 2px solid;
          margin: 0.2rem;
          padding: 0.1rem 0.5rem;
          border-radius: 2rem;
          cursor: pointer;
          &:hover {
            color: ${COLORS.purple};
          }
        }
      }
    }
  }
`;

export const Tag = styled.aside`
  display: inline-block;
  border: 2px solid;
  margin: 0.2rem;
  padding: 0.1rem 0.5rem;
  border-radius: 2rem;
  cursor: pointer;
  &:hover {
    color: ${COLORS.purple};
  }
`;
