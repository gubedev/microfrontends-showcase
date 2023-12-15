import React from "react";
import { Container } from "../Container";
import { Nav, NavBarContent } from "./style";

export default function Navbar() {
  return (
    <Nav>
      <Container>
        <NavBarContent></NavBarContent>
      </Container>
    </Nav>
  );
}
