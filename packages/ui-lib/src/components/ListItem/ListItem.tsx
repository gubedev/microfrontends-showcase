import React from "react";
import { StyledListItem } from "./style";

interface ListItemProps {
  children: React.ReactNode;
}

export function ListItem({ children }: ListItemProps) {
  return <StyledListItem>{children}</StyledListItem>;
}
