"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import logo from "../../../public/common/EventLogo.png";

const MainNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="primary" dark expand="md">
        <NavbarBrand href="/">
          <Image src={logo} alt="Navbar Company Logo" height={40} />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink href="https://sirzaxx.info">Portfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/code-zax">GitHub</NavLink>
            </NavItem>
            <NavItem>
              <Link href="/search" style={{ textDecoration: "none" }}>
                <NavLink>Search</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/favourites" style={{ textDecoration: "none" }}>
                <NavLink>Favourites</NavLink>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default MainNavbar;
