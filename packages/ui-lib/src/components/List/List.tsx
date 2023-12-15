import React from "react";
import { StyledList } from "./style";

interface ListProps {
  children: React.ReactNode;
}

export function List({ children }: ListProps) {
  return <StyledList>{children}</StyledList>;
}
