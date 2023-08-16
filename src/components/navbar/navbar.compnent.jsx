import React, { useState } from "react";
import { MobileMenu, NavBar } from "./navbar.styles";
import { Link, Outlet } from "react-router-dom";
import {
  AiFillApi,
  AiFillHome,
  AiFillPhone,
  AiFillPieChart,
  AiOutlineMenu,
  AiOutlineUser,
} from "react-icons/ai";

export default function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <NavBar>
        <div>
          <h1>
            M<span className="colored">r.</span>Koni
          </h1>
        </div>
        <div>
          <ul>
            <li>
              <Link to={"/"}>Accueil</Link>
            </li>
            <li>
              <Link to={"moi"}>Moi</Link>
            </li>
            <li>
              <Link to={"portfolio"}>Portoflio</Link>
            </li>
            <li>
              <Link to={"competences"}>Compétences</Link>
            </li>
            <li>
              <Link to={"contact"}>Contact</Link>
            </li>
          </ul>
        </div>
        <AiOutlineMenu
          id="menuBtn"
          onClick={() => setIsOpen((prev) => !prev)}
        />
        {isOpen && (
          <MobileMenu
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.1 }}
          >
            <ul>
              <li>
                <Link to={"/"}>
                  <AiFillHome />
                  &nbsp;Accueil
                </Link>
              </li>
              <li>
                <Link to={"moi"}>
                  <AiOutlineUser />
                  &nbsp;Moi
                </Link>
              </li>
              <li>
                <Link to={"portfolio"}>
                  <AiFillApi />
                  &nbsp;Portoflio
                </Link>
              </li>
              <li>
                <Link to={"competences"}>
                  <AiFillPieChart />
                  &nbsp;Compétences
                </Link>
              </li>
              <li>
                <Link to={"contact"}>
                  <AiFillPhone />
                  &nbsp;Contact
                </Link>
              </li>
            </ul>
          </MobileMenu>
        )}
      </NavBar>
      <Outlet />
    </>
  );
}
