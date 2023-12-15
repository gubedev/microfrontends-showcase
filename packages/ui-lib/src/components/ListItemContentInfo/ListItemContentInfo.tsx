import React from "react";
import { StyledListItemContentInfo } from "./style";

interface ListItemContentInfoProps {
  children: React.ReactNode;
}

export function ListItemContentInfo({ children }: ListItemContentInfoProps) {
  return <StyledListItemContentInfo>{children}</StyledListItemContentInfo>;
}
