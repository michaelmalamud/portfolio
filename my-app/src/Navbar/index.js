import React from "react";
import { Nav, NavLink, Name } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Name>Michael Malamud</Name>
        <NavLink to="/" activeStyle>
          Home
        </NavLink>
        <NavLink to="/about" activeStyle>
          About
        </NavLink>
        <NavLink to="/projects" activeStyle>
          Projects
        </NavLink>
        <NavLink to="/contact" activeStyle>
          Contact
        </NavLink>
      </Nav>
    </>
  );
};

export default Navbar;
