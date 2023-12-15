import React from "react";
import { StyledListItemContent } from "./style";

interface ListItemContentProps {
  children: React.ReactNode;
}

export function ListItemContent({ children }: ListItemContentProps) {
  return <StyledListItemContent>{children}</StyledListItemContent>;
}
