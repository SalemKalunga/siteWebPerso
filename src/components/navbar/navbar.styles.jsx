import { motion } from "framer-motion";
import { styled } from "styled-components";

export const COLORS = {
  blue: "#0D1117",
  black: "#333",
  white: "#fff",
  purple: "#5571FF",
  lightblue: "royalblue",
};

export const Flex = (direction, justify, align, gap) => {
  const style = `
      display:flex;
      justify-content:${justify};
      align-items:${align};
      gap:${gap};
      flex-direction:${direction}
      `;
  return style;
};
export const MediaQuery = (size) => {
  let text = "";
  switch (size) {
    case "phone":
      text = `@media screen and (max-width:550px)`;
      break;
    case "tablette":
      text = `@media screen and (max-width:950px)`;
      break;
    case "bigscreen":
      text = `@media screen and (max-width:1180px)`;
      break;
    default:
      return;
  }
  return text;
};

export const PADDING = `
padding:2rem 15rem;
${MediaQuery("tablette")} {
    padding: 2rem 5rem;
  };
  ${MediaQuery("phone")} {
    padding: 2rem;
  };
`;
export const NavBar = styled.nav`
  position: relative;
  box-shadow: 0px 0px 30px lightgray;
  ${PADDING}
  #menuBtn {
    display: none;
    font-size: 2rem;
    ${MediaQuery("phone")} {
      display: block;
    }
  }
  div {
    &:nth-child(1) {
      font-size: 2.5rem;
      font-family: "Josefin Sans", sans-serif;
    }
    font-size: 1.6rem;

    ul {
      ${Flex("row", "center", "center", "1rem")};
      li {
        list-style: none;
        a {
          text-decoration: none;
          color: ${COLORS.lightblue};
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
    ${MediaQuery("phone")} {
      &:has(ul) {
        display: none;
      }
    }
  }
  .colored {
    color: ${COLORS.purple};
  }
  ${Flex("row", "space-between", "center", "1rem")}
`;
export const MAIN_CONTAINER = styled.section`
  position: relative;
  min-height: 90vh;
  width: 100%;
  font-size: 1.6rem;
  ${PADDING}
`;

export const CONTAINER = styled(motion.section)`
  position: relative;
  width: 100%;
  min-height: 50vh;
  border: 1px solid;
  padding: 2rem 0;
`;

export const MobileMenu = styled(motion.section)`
  position: absolute;
  width: 100%;
  font-size: 1.6rem;

  left: 0;
  min-height: 30vh;
  background-color: ${COLORS.white};
  z-index: 10;
  top: 8rem;
  box-shadow: 0px 0px 3px lightgray;
  ul {
    ${Flex("column", "center", "center", "1rem")};
    list-style:none;
    li {
      width: 100%;
      a {
        display: block;
        padding: 1rem;
        text-decoration: none;
        color:${COLORS.purple};
    };
        &:hover {
          background-color: ${COLORS.white};
          color: #fff;
          text-decoration: none;
        }
      }
    }
  }
`;
