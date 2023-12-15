import React from "react";
import { StyledListItemContentInfoName } from "./style";

interface ListItemContentInfoNameProps {
  children: React.ReactNode;
}

export function ListItemContentInfoName({
  children,
}: ListItemContentInfoNameProps) {
  return (
    <StyledListItemContentInfoName>{children}</StyledListItemContentInfoName>
  );
}
