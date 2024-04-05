import React from "react";
import { useState } from "react";
import { Logo } from "./Logo";
import {
  NavLinkWrapper,
  NavbarWrapper,
  StyledFontAwesomeIcon,
  StyledNavLink,
} from "../styles/Navbar.styled";
import { faBars } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
  const link = [
    {
      page: "Home",
      href: "/",
    },
    {
      page: "About",
      href: "/about",
    },
    {
      page: "Blog",
      href: "/services",
    },
    {
      page: "Sign Up",
      href: "/sign-up",
    },
  ];

  const [active, setActive] = useState(false);

  return (
    <NavbarWrapper>
      <Logo />
      <StyledFontAwesomeIcon icon={faBars} onClick={()=> setActive(!active)}/>
      <NavLinkWrapper active={active}>
        {link.map((link) => (
          <StyledNavLink activeclassname='active' key={link.page} to={link.href}>
            {link.page}
          </StyledNavLink>
        ))}
      </NavLinkWrapper>
    </NavbarWrapper>
  );
};

export default Navbar;
