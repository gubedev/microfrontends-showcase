import React from "react";
import Navbar from "../Navbar";
import { Wrapper } from "./style";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Wrapper>
      <Navbar />
      {children}
    </Wrapper>
  );
}
